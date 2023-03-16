# Print all unique lines in the file
# Example: 
# 1
# 2
# 3
# 1
# 4
# 2

# Output: 
# 3
# 4

f = open("text.py", "r")
lines = f.read()
split_lines = lines.split()
split_lines.sort()
arr_length = len(split_lines)

if split_lines[0] != split_lines[1]:
    print(split_lines[0], end = " ")
for i in range(1, arr_length - 1):
        if (split_lines[i] != split_lines[i + 1] and
            split_lines[i] != split_lines[i - 1]):
            print( split_lines[i], end = " ")
if split_lines[arr_length - 2] != split_lines[arr_length - 1]:
        print(split_lines[arr_length - 1], end = " ")
        
