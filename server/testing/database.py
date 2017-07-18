from . import TestingBase
from collections import Counter

from v1.apps.users.models import User
from v1.apps.journal.models import *
from v1.apps.forum.models import *

from v1.apps import app, db
import random

class DatabaseTests(TestingBase):

    def user_login(self):
        username = "TestUser1"
        correct_password = "password"
        incorrect_password = "Password"
        user = User.query.filter_by(username=username).first()
        assert username in user.username
        assert user.verify_password(correct_password)
        assert not user.verify_password(incorrect_password)


class JournalTests(DatabaseTests):
    journal_title = "Test Board"
    entry_title = "Test Thread"
    entry_content = "This is the beginning of a journal entry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    author_id = 1
    commenter_id = 2

    def setUp(self):
        super().setUp()
        journal = Journal(title=self.journal_title, description="This is a test journal")
        author = User.query.get(self.author_id)
        entry = Entry(title=self.entry_title, author=author, content=self.entry_content)
        journal.entries.append(entry)
        db.session.add(journal)
        db.session.commit()

    def test_create_journal_entry(self):
        comment_content = "This is a test post!"
        author = User.query.get(self.commenter_id)
        entry = Entry.query.filter_by(title=self.entry_title).first()
        entry.comments.append(Comment(content=comment_content, author=author))
        db.session.add(entry)
        db.session.commit()
        journal = Journal.query.filter_by(title=self.journal_title).first()
        for entry in journal.entries:
            assert entry.author.id == self.author_id
            assert self.entry_title in entry.title
            for comment in entry.comments:
                assert comment.author.id == self.commenter_id
                assert comment_content in comment.content

class ForumTests(DatabaseTests):
    board_name = "Test Board"
    thread_name = "Test Thread"
    author_id = 1
    commenter_id = 2

    def setUp(self):
        super().setUp()
        board = Board(name=self.board_name, description="This is a test board")
        author = User.query.get(self.author_id)
        thread = Thread(name=self.thread_name, author=author)
        board.threads.append(thread)
        db.session.add(board)
        db.session.commit()

    def test_create_forum_post(self):
        post_content = "This is a test post!"
        author = User.query.get(self.commenter_id)
        thread = Thread.query.filter_by(name=self.thread_name).first()
        thread.posts.append(Post(content=post_content, author=author))
        db.session.add(thread)
        db.session.commit()
        board = Board.query.filter_by(name=self.board_name).first()
        for thread in board.threads:
            assert thread.author.id == self.author_id
            assert self.thread_name in thread.name
            for post in thread.posts:
                assert post.author.id == self.commenter_id
                assert post_content in post.content
