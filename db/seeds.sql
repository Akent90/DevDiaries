USE blog_db;

INSERT INTO users (username, email, password)
VALUES
    ('johnathan_doe', 'bigbrain0102@yahoo.com', '$2b$10$vK2kpsjYhdFUVI01FlPGcO4Xzm15sjw5soci5TTREeP3GopE31Tp6'),
    ('janine_doe', 'bossboss123@gmail.com', '$2b$10$XbKkqbFOdS0Kp5qZaUHnmOgvDUMhn3t5Pcbp19Bj5zG.si3BixHFC');

INSERT INTO posts (title, content, user_id)
VALUES
    ('My First Post!!!', 'I cannot believe that I am the first person to post!', 1),
    ('Hello, World!', 'I just wanted to say hello to you all.', 2);

INSERT INTO comments (comment_text, user_id, post_id)
VALUES
    ('Remarkable!', 2, 1), 
    ('Thanks for sharing.', 1, 2);