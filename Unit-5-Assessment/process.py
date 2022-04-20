log_file = open("um-server-01.txt") # importing text file 


def sales_reports(log_file): # defining a function sales_report that takes log_file.
    for line in log_file: # looping through everything in log file and calling it line.
        line = line.rstrip() # stripping off extra white space at the end of line.
        day = line[0:3] # creating new variable "day" by grabbing the first through third characters in the string.
        if day == "Mon": # if day is equal to monday print line.
            print(line) # print line


sales_reports(log_file) # call function sales_reports passing in the log file.
