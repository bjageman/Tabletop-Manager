from . import TestingBase
from collections import Counter

from v1.apps.users.models import User
from v1.apps.blog.models import *
from v1.apps.forum.models import *

from v1.apps import app, db
import random

class DBTests(TestingBase):

    def user_login(self):
        username = "TestUser1"
        correct_password = "password"
        incorrect_password = "Password"
        user = User.query.filter_by(username=username).first()
        assert username in user.username
        assert user.verify_password(correct_password)
        assert not user.verify_password(incorrect_password)


class ForumTests(DBTests):
    blog_name = "Test Board"
    entry_name = "Test Thread"
    author_id = 1
    commenter_id = 2

    def setUp(self):
        super().setUp()
        blog = Blog(name=self.blog_name, description="This is a test board")
        author = User.query.get(self.author_id)
        entry = Entry(name=self.entry_name, author=author)
        blog.entry.append(entry)
        db.session.add(blog)
        db.session.commit()

    def test_create_forum_post(self):
        comment_content = "This is a test post!"
        author = User.query.get(self.commenter_id)
        entry = Entry.query.filter_by(name=self.entry_name).first()
        entry.comments.append(Comment(content=comment_content, author=author))
        db.session.add(thread)
        db.session.commit()
        blog = Blog.query.filter_by(name=self.blog_name).first()
        for entry in blog.entries:
            assert blog.author.id == self.author_id
            assert self.entry_name in blog.name
            for comment in entry.comments:
                assert comment.author.id == self.commenter_id
                assert comment_content in post.content

class ForumTests(DBTests):
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
