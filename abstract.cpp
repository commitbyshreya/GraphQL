#include <iostream>
using namespace std;

class Shape{
    public:
    virtual void draw(){}
};

class Circle : public Shape{
    public:
    void draw(){
        // static - it will initialize x=0 only once int he lifetime of program that is it will be 
        // initialized in a diff mem location 
        // int y = 1 -> this will initialize x=0 everuytime the funct is called so the value will be x= 0 only
        static int x = 0;
        int y = 1;
        cout<<"x: "<<x<<" y: "<<y<<endl;
        x++; y++;
    }
};

class A{
    public:
    static const int x =10 ;

    void a(){
        cout<<x<<endl;
    }
    void b(){
        cout<<x<<endl;
    }
};

int main() {
    Circle c;
    c.draw();
    c.draw();
    c.draw();

    A ob;
    ob.a();
    ob.b();
    return 0;
}
