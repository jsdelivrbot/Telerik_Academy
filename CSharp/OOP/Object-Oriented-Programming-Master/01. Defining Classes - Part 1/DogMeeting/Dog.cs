using System;

class Dog
{
    private string dogName;// Inline initialization
    private string dogBreed;// Inline initialization
   
    // Parameterless /default/ constructor (intentionally left empty)
    //���� � �� �� ���� ��� ������ ������������ �� �� ������� ��������� ��� ��������� �� �����;
    public Dog()
    { 
    }

    //����� �� ������������� �� ����� (��� ������������ � private ��������)
    //public static Dog CreateDog() //�������� ���� ������������
    //{
    //    return new Dog();
    //}



    // Constructor with parameters (dont have return value)
    public Dog(string name, string breed)
    { 
        this.dogName = name;
        this.dogBreed = breed; 
    }

    //properties
    public string DogName // defining with Capital letter
    {
        get { return dogName; }
        set { dogName = value; }
    }

    //properties
    public string DogBreed // defining with Capital letter
    {
        get { return this.dogBreed; }
        set { this.dogBreed = value; }
    }


    //method
    public void SayBau()
    {
        Console.WriteLine("{0} said: Bauuuuuu!", 
			this.dogName ?? "[unnamed dog]");
    }
} 
