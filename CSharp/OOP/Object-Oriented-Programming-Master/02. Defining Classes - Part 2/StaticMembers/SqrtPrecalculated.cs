//�������� ����������, �������� ����(static member) �� ����� �������� ����� ����, ��������, ����� ��� ���� ����, ����� ��� ����������� static � ������������ ��1.���� ��������, �� ������, ������ � �������� ��������� ���� ��������, ����������� �� ����� ����, � �� �� ����� ��������� ����� �� ������� ����.
//������������, ������ ��������� ����, ����� ��� �������� ���� ��������, ����� �� �� ����������, ��� �� ��������� ���� ���� ����� �� ������� ����.������������, �� ����� �� ������� � �� ����� ������ (��������) �� �����, �� �� ����� �� ��������� ���������� �� ������, ��� �� ���������� ���������� �� ������ � ��������.
//----------------------------------------------------
//���������� �������� �� ����� ����� �� �� ��������� ��� �� �� ������� ����� �� ������� ����.
//----------------------------------------------------
//������ ������, ��������� �� ���������� �� ���� ���� �������� ���������� ������ �� �����.
//----------------------------------------------------



using System;

class SqrtPrecalculated //���� �� ��� ���� �������� ������� (������, �������� � ������������)
{
    public const int MAX_VALUE = 10000;
    public static int Prop {get; set;}
    // Static field
    private static int[] sqrtValues; //�� ����� �� ������� ������� � ������ (������ ���� �� �� ����� � �� �� �������� ������� (�� � ���� string)

    // Static constructor???? (precalculated values of Sqrt)
    static SqrtPrecalculated()
    {
        sqrtValues = new int[MAX_VALUE + 1];
        for (int i = 0; i < sqrtValues.Length; i++)
        {
            sqrtValues[i] = (int) Math.Sqrt(i);
        }
    }

    //static property
    public static int Sqrt200
    {
        get
        {
            return sqrtValues[200];
        }
    }

    // Static method 
    public static int GetSqrt(int value)
    {
        return sqrtValues[value];
    }

    // The Main() method is always static
    static void Main()
    {

        //--------------------------------------------------
        //��� ����� � static �� ����� �� ���������� ���������
        //SqrtPrecalculated instance = new SqrtPrecalculated(); //���� �� �� ���������

        //��� ����� �� � static �� ����� �� ���������� ���������
        // SqrtPrecalculated instance = new SqrtPrecalculated();//�� �� ���������


        //--------------------------------------------------
        //��� ���������� "Prop" � �������� ���� �� ����� �� �� ���������� ���� �����������, �� �� ����� �� �� ���������� ���� �����
        // Console.WriteLine(instance.Prop); //���� �� �� ���������
        //Console.WriteLine(SqrtPrecalculated.Prop); //�� �� ���������

        //��� ���������� "Prop" �� � �������� �� ����� �� �� ���������� ���� �����������, �� ���� �� ����� �� �� ���������� ���� �����
        // Console.WriteLine(instance.Prop); //�� �� ���������
        //Console.WriteLine(SqrtPrecalculated.Prop); //���� �� �� ���������
        //--------------------------------------------------

        Console.WriteLine(SqrtPrecalculated.GetSqrt(254));
        Console.WriteLine(SqrtPrecalculated.Sqrt200);
    }
}
