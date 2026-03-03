CREATE TABLE `users` (
	`id` serial PRIMARY KEY,
	`status` enum('active','inactive') NOT NULL DEFAULT 'active',
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` text NOT NULL,
	`avatar` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `email_unique` UNIQUE INDEX(`email`)
);
