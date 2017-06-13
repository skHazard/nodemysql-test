CREATE database if not exists fortest;
use fortest;

create table Inventory 
(	id int not null AUTO_INCREMENT
	,name char(255)
    ,description text(5000)
, primary key(id))

INSERT INTO Inventory (id, name, description) VALUES 
(1, "Laptop", "A laptop, often called a notebook or notebook computer, is a small, portable personal computer with a clamshell form factor, an alphanumeric keyboard on the lower part of the clamshell and a thin LCD or LED computer screen on the upper portion, which is opened up to use the computer. Laptops are folded shut for transportation, and thus are suitable for mobile use. Although originally there was a distinction between laptops and notebooks, the former being bigger and heavier than the latter, as of 2014, there is often no longer any difference. Laptops are commonly used in a variety of settings, such as at work, in education, in playing games, Internet surfing, for personal multimedia and general home computer use."),
(2 , "Network Switch", "A network switch (also called switching hub, bridging hub, officially MAC bridge) is a computer networking device that connects devices together on a computer network by using packet switching to receive, process, and forward data to the destination device. Unlike less advanced network hubs, a network switch forwards data only to the devices that need to receive it, rather than broadcasting the same data out of each of its ports.");