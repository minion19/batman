const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
function preload(){
    backgroundImg = loadImage("images/Walking Frame/walking_1.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    for(var i=0; i < 400; i++){
        new rain(random(0,400), random(0,400))
    }
}   

