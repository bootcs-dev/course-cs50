#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    // Prompt the user for some text
    string text = get_string("Text: ");

    // Count the number of letters, words, and sentences in the text
    int letters = count_letters(text);
    int words = count_words(text);
    int sentences = count_sentences(text);

    // Compute the Coleman-Liau index
    // TODO

    // Print the grade level
    // TODO
}

int count_letters(string text)
{
    // TODO
    return 0;
}

int count_words(string text)
{
    // TODO
    return 0;
}

int count_sentences(string text)
{
    // TODO
    return 0;
}
