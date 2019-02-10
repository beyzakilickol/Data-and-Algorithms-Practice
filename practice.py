# -------------Python-------------------------------
def first_non_repeating_letter(str):
    
    letter_list = [i.lower() for i in str]
    print(letter_list)
    for i in range(len(letter_list)):
         if letter_list.count(letter_list[i]) == 1:
             return str[i]
    return ""
print(first_non_repeating_letter('Helloheoj'))  