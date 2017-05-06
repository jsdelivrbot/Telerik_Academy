﻿using System;
class IterativeNestedLoops
{
    static int numberOfLoops;
    static int numberOfIterations;
    static int[] loops;
    static int currentPosition;
    static void Main()

    {
        Console.Write("N = ");
        numberOfLoops = int.Parse(Console.ReadLine());
        Console.Write("K = ");
        numberOfIterations = int.Parse(Console.ReadLine());
        loops = new int[numberOfLoops];
        NestedLoops();
    }
    static void NestedLoops()
    {
        InitLoops();

        while (true)
        {
            PrintLoops();
            currentPosition = numberOfLoops - 1;
            loops[currentPosition] = loops[currentPosition] + 1;
            while (loops[currentPosition] > numberOfIterations)
            {
                loops[currentPosition] = 1;
                currentPosition--;
                if (currentPosition < 0)
                {
                    return;
                }
                loops[currentPosition] = loops[currentPosition] + 1;
            }
        }
    }
    static void InitLoops()
    {
        for (int i = 0; i < numberOfLoops; i++)
        {
            loops[i] = 1;
        }
    }
    static void PrintLoops()
    {
        for (int i = 0; i < numberOfLoops; i++)
        {
            Console.Write("{0} ", loops[i]);
        }
        Console.WriteLine();
    }
}