window.pandasQuestions = {
  set1: [
    {
        id: 58,
        question: "df.to_csv(\"out.csv\", index=False) does what?",
        options: ["Saves only the index", "Saves to CSV without the index column", "Reads CSV", "Deletes index"],
        correctAnswer: "Saves to CSV without the index column",
        explanation: "The correct answer is Saves to CSV without the index column"
    },
    {
        id: 13,
        question: "Which creates a Series?",
        options: ["pd.Table([1,2,3])", "pd.Col([1,2,3])", "pd.Array([1,2,3])", "pd.Series([1,2,3])"],
        correctAnswer: "pd.Series([1,2,3])",
        explanation: "The correct answer is pd.Series([1,2,3])"
    },
    {
        id: 141,
        question: "In the same df, df[\"A\"] * 2 gives",
        options: ["1, 2", "3, 4", "2, 4", "2, 3"],
        correctAnswer: "2, 4",
        explanation: "The correct answer is 2, 4"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 115,
        question: "Which of these returns the number of rows and columns?",
        options: ["shape", "dim", "size()", "count_all"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 72,
        question: "df.to_json(\"output.json\") saves",
        options: ["To Excel", "To JSON", "To CSV", "To HTML"],
        correctAnswer: "To JSON",
        explanation: "The correct answer is To JSON"
    },
    {
        id: 53,
        question: "df.shape returns",
        options: ["Number of rows and columns", "Column names", "Memory usage", "Data types"],
        correctAnswer: "Number of rows and columns",
        explanation: "The correct answer is Number of rows and columns"
    },
    {
        id: 280,
        question: "Which pivot_table parameter lists the numeric column to summarize?",
        options: ["target", "data_col", "values", "numbers"],
        correctAnswer: "values",
        explanation: "The correct answer is values"
    },
    {
        id: 45,
        question: "To add a new column City to df, use",
        options: ["df.city()", "df.add(\"City\")", "df.append(\"City\")", "df[\"City\"] = [...]"],
        correctAnswer: "df[\"City\"] = [...]",
        explanation: "The correct answer is df[\"City\"] = [...]"
    },
    {
        id: 217,
        question: "What does df.T do?",
        options: ["Tabulates it", "Types it", "Transposes the DataFrame", "Sorts the DataFrame"],
        correctAnswer: "Transposes the DataFrame",
        explanation: "The correct answer is Transposes the DataFrame"
    },
    {
        id: 17,
        question: "s = pd.Series([10,20,30,40]). What is s.sum()?",
        options: ["25", "40", "100", "10"],
        correctAnswer: "100",
        explanation: "The correct answer is 100"
    },
    {
        id: 16,
        question: "When a Series is created from a dictionary, the keys become",
        options: ["Values", "Index labels", "Column names", "The dtype"],
        correctAnswer: "Index labels",
        explanation: "The correct answer is Index labels"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 112,
        question: "The .dt accessor works on",
        options: ["Boolean columns", "String columns", "Integer columns", "Datetime columns"],
        correctAnswer: "Datetime columns",
        explanation: "The correct answer is Datetime columns"
    },
    {
        id: 120,
        question: "Which counts missing values in each column?",
        options: ["df.missing()", "df.isnull().sum()", "df.nan()", "df.count_null()"],
        correctAnswer: "df.isnull().sum()",
        explanation: "The correct answer is df.isnull().sum()"
    },
    {
        id: 259,
        question: "What does df[\"Marks\"].mean() ignore by default?",
        options: ["Strings", "Zero values", "Negative values", "NaN values"],
        correctAnswer: "NaN values",
        explanation: "The correct answer is NaN values"
    },
    {
        id: 14,
        question: "Which creates a DataFrame?",
        options: ["pd.DataFrame(data)", "pd.Sheet(data)", "pd.Table(data)", "pd.Frame(data)"],
        correctAnswer: "pd.DataFrame(data)",
        explanation: "The correct answer is pd.DataFrame(data)"
    },
    {
        id: 288,
        question: "Which method converts a DataFrame to a NumPy array?",
        options: ["df.numpy()", "df.to_numpy()", "df.array_out()", "df.as_np()"],
        correctAnswer: "df.to_numpy()",
        explanation: "The correct answer is df.to_numpy()"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 215,
        question: "What does df.drop(\"Age\", axis=1) do?",
        options: ["Drops all", "Renames Age", "Drops the Age column", "Drops the Age row"],
        correctAnswer: "Drops the Age column",
        explanation: "The correct answer is Drops the Age column"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 230,
        question: "Which statement about a Pandas Series is correct?",
        options: ["It is a one-dimensional labeled array", "It can only store text", "It has no index", "It is always two-dimensional"],
        correctAnswer: "It is a one-dimensional labeled array",
        explanation: "The correct answer is It is a one-dimensional labeled array"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 4,
        question: "A Pandas Series is",
        options: ["A database", "Three-dimensional", "Two-dimensional", "One-dimensional labeled data"],
        correctAnswer: "One-dimensional labeled data",
        explanation: "The correct answer is One-dimensional labeled data"
    },
    {
        id: 82,
        question: "df[\"Age\"].astype(str) converts Age to",
        options: ["bool", "int", "float", "string"],
        correctAnswer: "string",
        explanation: "The correct answer is string"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 80,
        question: "Which renames all columns at once?",
        options: ["df.columns = [...]", "df.labels = [...]", "df.rename_all()", "df.names = [...]"],
        correctAnswer: "df.columns = [...]",
        explanation: "The correct answer is df.columns = [...]"
    },
    {
        id: 111,
        question: "pd.date_range(start=\"2026-01-01\", end=\"2026-01-10\") generates",
        options: ["Only two dates", "11 daily dates", "10 daily dates", "9 daily dates"],
        correctAnswer: "10 daily dates",
        explanation: "The correct answer is 10 daily dates"
    },
    {
        id: 173,
        question: "Why is Marks float when it contains None?",
        options: ["Pandas converts all to float", "None is an integer", "NaN is a float value", "It is a string"],
        correctAnswer: "NaN is a float value",
        explanation: "The correct answer is NaN is a float value"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 50,
        question: "To sort in descending order, use",
        options: ["reverse=False", "order=\"desc\"", "descending=True", "ascending=False"],
        correctAnswer: "ascending=False",
        explanation: "The correct answer is ascending=False"
    },
    {
        id: 184,
        question: "merge with how=\"left\" keeps",
        options: ["All rows from the right DataFrame", "Only matching rows", "No rows", "All rows from the left DataFrame"],
        correctAnswer: "All rows from the left DataFrame",
        explanation: "The correct answer is All rows from the left DataFrame"
    },
    {
        id: 177,
        question: "Which is true about loc?",
        options: ["It only works on columns", "It is position-based", "It is label-based and slice end is inclusive", "It excludes the end label"],
        correctAnswer: "It is label-based and slice end is inclusive",
        explanation: "The correct answer is It is label-based and slice end is inclusive"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 23,
        question: "For s = pd.Series([10,20,30,40,50]), s[0] returns",
        options: ["10", "20", "Error", "0"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 236,
        question: "Which method gives the column names of df as a list-like?",
        options: ["df.keys_only", "df.labels", "df.columns", "df.names()"],
        correctAnswer: "df.columns",
        explanation: "The correct answer is df.columns"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 64,
        question: "df.dtypes shows",
        options: ["Column count", "The data type of each column", "Shape", "Only index type"],
        correctAnswer: "The data type of each column",
        explanation: "The correct answer is The data type of each column"
    },
    {
        id: 194,
        question: "Pivot table with index=Department, columns=Gender, aggfunc=mean produces",
        options: ["Error", "Mean salary by department and gender", "Count by gender only", "Row list"],
        correctAnswer: "Mean salary by department and gender",
        explanation: "The correct answer is Mean salary by department and gender"
    },
    {
        id: 41,
        question: "df.iloc[0:3] returns the",
        options: ["Last three rows", "Rows 1 to 3 inclusive of row 3 by label", "First three rows", "First three columns"],
        correctAnswer: "First three rows",
        explanation: "The correct answer is First three rows"
    },
    {
        id: 283,
        question: "Which is the correct way to read a CSV with no index column written by to_csv(index=False)?",
        options: ["pd.read_csv(\"file.csv\")", "pd.read_csv(\"file.csv\", index=True)", "pd.load(\"file.csv\")", "pd.csv(\"file.csv\")"],
        correctAnswer: "pd.read_csv(\"file.csv\")",
        explanation: "The correct answer is pd.read_csv(\"file.csv\")"
    },
    {
        id: 151,
        question: "For the same df, df[df[\"Age\"] > 20][\"Name\"] returns",
        options: ["B and D", "C only", "A and B", "A and C"],
        correctAnswer: "B and D",
        explanation: "The correct answer is B and D"
    },
    {
        id: 186,
        question: "merge with how=\"outer\" keeps",
        options: ["Nothing", "All rows from both DataFrames", "Only left rows", "Only matching rows"],
        correctAnswer: "All rows from both DataFrames",
        explanation: "The correct answer is All rows from both DataFrames"
    },
    {
        id: 296,
        question: "What does pd.DataFrame({\"A\":[1,2]}).T.shape return?",
        options: ["(2, 1)", "(1, 2)", "(2, 2)", "(1, 1)"],
        correctAnswer: "(1, 2)",
        explanation: "The correct answer is (1, 2)"
    },
    {
        id: 99,
        question: "merge() is similar to",
        options: ["Slicing", "Stacking", "Sorting", "SQL JOIN"],
        correctAnswer: "SQL JOIN",
        explanation: "The correct answer is SQL JOIN"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 24,
        question: "The dtype of pd.Series([10,20,30]) is",
        options: ["int64", "float64", "bool", "object"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 117,
        question: "Select the single column \"Name\": ?",
        options: ["df.get[Name]", "df[\"Name\"]", "df(Name)", "df[Name]"],
        correctAnswer: "df[\"Name\"]",
        explanation: "The correct answer is df[\"Name\"]"
    },
    {
        id: 149,
        question: "For the same df, how many rows satisfy df[\"Marks\"] > 80?",
        options: ["4", "1", "3", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 52,
        question: "df.tail() shows",
        options: ["Column dtypes", "Last 5 rows", "Summary statistics", "First 5 rows"],
        correctAnswer: "Last 5 rows",
        explanation: "The correct answer is Last 5 rows"
    },
  ],
  set2: [
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 187,
        question: "merge with how=\"inner\" keeps",
        options: ["Only right rows", "All rows", "Only matching rows", "Only left rows"],
        correctAnswer: "Only matching rows",
        explanation: "The correct answer is Only matching rows"
    },
    {
        id: 84,
        question: "The & operator in Pandas filtering means",
        options: ["NOT", "XOR only", "OR", "AND"],
        correctAnswer: "AND",
        explanation: "The correct answer is AND"
    },
    {
        id: 190,
        question: "For pd.concat([df1, df2]) with same columns, rows of result equal",
        options: ["Product of rows", "rows of df1 + rows of df2", "rows of df2", "rows of df1"],
        correctAnswer: "rows of df1 + rows of df2",
        explanation: "The correct answer is rows of df1 + rows of df2"
    },
    {
        id: 182,
        question: "Which parameter name in merge defines the join type?",
        options: ["how", "join_type", "method", "type"],
        correctAnswer: "how",
        explanation: "The correct answer is how"
    },
    {
        id: 108,
        question: "df[\"Date\"].dt.month extracts",
        options: ["Day", "Hour", "Year", "Month"],
        correctAnswer: "Month",
        explanation: "The correct answer is Month"
    },
    {
        id: 137,
        question: "In the same df, df[\"A\"].sum() is",
        options: ["3", "7", "4", "10"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 37,
        question: "df.iloc[0:2] returns",
        options: ["Rows at positions 0 and 1", "The first two columns", "Only row 2", "Rows at positions 0, 1 and 2"],
        correctAnswer: "Rows at positions 0 and 1",
        explanation: "The correct answer is Rows at positions 0 and 1"
    },
    {
        id: 88,
        question: "Why use & instead of \"and\" in filters?",
        options: ["No reason", "& works element-wise on Series", "\"and\" is faster", "& is shorter"],
        correctAnswer: "& works element-wise on Series",
        explanation: "The correct answer is & works element-wise on Series"
    },
    {
        id: 274,
        question: "Which groupby call gives the number of rows per group?",
        options: ["df.size(\"Department\")", "df.groupby(\"Department\").size()", "df.groupby().len", "df.groupby(\"Department\").rows"],
        correctAnswer: "df.groupby(\"Department\").size()",
        explanation: "The correct answer is df.groupby(\"Department\").size()"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 139,
        question: "In the same df, df.iloc[1,0] is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 286,
        question: "What does pd.read_csv(\"f.csv\", sep=\";\") specify?",
        options: ["JSON", "Semicolon-separated values", "Tab-separated", "Space-separated"],
        correctAnswer: "Semicolon-separated values",
        explanation: "The correct answer is Semicolon-separated values"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 167,
        question: "For the same data, min salary of IT is",
        options: ["45000", "50000", "60000", "55000"],
        correctAnswer: "50000",
        explanation: "The correct answer is 50000"
    },
    {
        id: 29,
        question: "To name columns when creating a DataFrame from a list of lists, use the argument",
        options: ["names", "labels", "cols", "columns"],
        correctAnswer: "columns",
        explanation: "The correct answer is columns"
    },
    {
        id: 118,
        question: "Which is a label-based selector?",
        options: ["loc", "index_of", "iloc", "at_pos"],
        correctAnswer: "loc",
        explanation: "The correct answer is loc"
    },
    {
        id: 17,
        question: "s = pd.Series([10,20,30,40]). What is s.sum()?",
        options: ["25", "40", "100", "10"],
        correctAnswer: "100",
        explanation: "The correct answer is 100"
    },
    {
        id: 162,
        question: "For the same df, df[\"Age\"].sum() is",
        options: ["82", "78", "80", "84"],
        correctAnswer: "82",
        explanation: "The correct answer is 82"
    },
    {
        id: 206,
        question: "What does s.dtype return for pd.Series([1.5, 2.5])?",
        options: ["int64", "bool", "object", "float64"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 138,
        question: "In the same df, df[\"B\"].mean() is",
        options: ["3", "7", "3.5", "4"],
        correctAnswer: "3.5",
        explanation: "The correct answer is 3.5"
    },
    {
        id: 34,
        question: "Which is used to select multiple columns?",
        options: ["df(A,B)", "df[[\"A\",\"B\"]]", "df[\"A\",\"B\"]", "df.get(A,B)"],
        correctAnswer: "df[[\"A\",\"B\"]]",
        explanation: "The correct answer is df[[\"A\",\"B\"]]"
    },
    {
        id: 109,
        question: "df[\"Date\"].dt.day extracts",
        options: ["Day of the month", "Week", "Month", "Year"],
        correctAnswer: "Day of the month",
        explanation: "The correct answer is Day of the month"
    },
    {
        id: 291,
        question: "Which statement about NaN is true?",
        options: ["NaN equals zero", "NaN equals NaN", "NaN is not equal to NaN", "NaN equals None always"],
        correctAnswer: "NaN is not equal to NaN",
        explanation: "The correct answer is NaN is not equal to NaN"
    },
    {
        id: 256,
        question: "Which of the following sorts by index?",
        options: ["df.index_sort()", "df.sort_values()", "df.order_index()", "df.sort_index()"],
        correctAnswer: "df.sort_index()",
        explanation: "The correct answer is df.sort_index()"
    },
    {
        id: 203,
        question: "In a Series, what does s.index return?",
        options: ["The mean", "The labels", "The values", "The dtype"],
        correctAnswer: "The labels",
        explanation: "The correct answer is The labels"
    },
    {
        id: 235,
        question: "What is NaN?",
        options: ["A string", "A column name", "A missing value marker", "An index"],
        correctAnswer: "A missing value marker",
        explanation: "The correct answer is A missing value marker"
    },
    {
        id: 74,
        question: "df.isnull() returns",
        options: ["A list", "Column names", "A DataFrame of True/False", "The count of nulls"],
        correctAnswer: "A DataFrame of True/False",
        explanation: "The correct answer is A DataFrame of True/False"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 72,
        question: "df.to_json(\"output.json\") saves",
        options: ["To Excel", "To JSON", "To CSV", "To HTML"],
        correctAnswer: "To JSON",
        explanation: "The correct answer is To JSON"
    },
    {
        id: 127,
        question: "Which method combines DataFrames using a key?",
        options: ["append_key()", "stack()", "merge()", "concat()"],
        correctAnswer: "merge()",
        explanation: "The correct answer is merge()"
    },
    {
        id: 288,
        question: "Which method converts a DataFrame to a NumPy array?",
        options: ["df.numpy()", "df.to_numpy()", "df.array_out()", "df.as_np()"],
        correctAnswer: "df.to_numpy()",
        explanation: "The correct answer is df.to_numpy()"
    },
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 135,
        question: "Which is 1-dimensional?",
        options: ["Table", "Series", "DataFrame", "Pivot table"],
        correctAnswer: "Series",
        explanation: "The correct answer is Series"
    },
    {
        id: 220,
        question: "What does df.copy() do?",
        options: ["Sorts", "Saves to file", "Deletes", "Creates a copy of the DataFrame"],
        correctAnswer: "Creates a copy of the DataFrame",
        explanation: "The correct answer is Creates a copy of the DataFrame"
    },
    {
        id: 205,
        question: "What does len(s) return for a Series with 5 items?",
        options: ["5", "4", "1", "6"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 186,
        question: "merge with how=\"outer\" keeps",
        options: ["Nothing", "All rows from both DataFrames", "Only left rows", "Only matching rows"],
        correctAnswer: "All rows from both DataFrames",
        explanation: "The correct answer is All rows from both DataFrames"
    },
    {
        id: 71,
        question: "df.to_excel(\"output.xlsx\", index=False) saves",
        options: ["To JSON", "To CSV", "To Excel without index", "To SQL"],
        correctAnswer: "To Excel without index",
        explanation: "The correct answer is To Excel without index"
    },
    {
        id: 261,
        question: "What does df.fillna(method=\"ffill\") do (forward fill)?",
        options: ["Fills with previous valid value", "Fills with mean", "Drops rows", "Fills with zero"],
        correctAnswer: "Fills with previous valid value",
        explanation: "The correct answer is Fills with previous valid value"
    },
    {
        id: 253,
        question: "What does df.loc[df[\"Marks\"] > 80, \"Name\"] return?",
        options: ["Error", "Marks above 80", "All rows", "Names of students with Marks above 80"],
        correctAnswer: "Names of students with Marks above 80",
        explanation: "The correct answer is Names of students with Marks above 80"
    },
    {
        id: 47,
        question: "df[df[\"Marks\"] > 80] returns",
        options: ["Rows where Marks are 80", "A boolean Series only", "Rows where Marks are greater than 80", "Only the Marks column"],
        correctAnswer: "Rows where Marks are greater than 80",
        explanation: "The correct answer is Rows where Marks are greater than 80"
    },
    {
        id: 25,
        question: "In a DataFrame, the labels along the top are called",
        options: ["dtype", "Index", "Column names", "Shape"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
    {
        id: 57,
        question: "pd.read_csv(\"students.csv\") does what?",
        options: ["Writes a CSV", "Reads a CSV into a DataFrame", "Deletes a CSV", "Converts to Excel"],
        correctAnswer: "Reads a CSV into a DataFrame",
        explanation: "The correct answer is Reads a CSV into a DataFrame"
    },
    {
        id: 79,
        question: "df.rename(columns={\"Name\":\"Student_Name\"}) does what?",
        options: ["Sorts", "Renames index", "Deletes Name", "Renames column Name"],
        correctAnswer: "Renames column Name",
        explanation: "The correct answer is Renames column Name"
    },
    {
        id: 82,
        question: "df[\"Age\"].astype(str) converts Age to",
        options: ["bool", "int", "float", "string"],
        correctAnswer: "string",
        explanation: "The correct answer is string"
    },
    {
        id: 217,
        question: "What does df.T do?",
        options: ["Tabulates it", "Types it", "Transposes the DataFrame", "Sorts the DataFrame"],
        correctAnswer: "Transposes the DataFrame",
        explanation: "The correct answer is Transposes the DataFrame"
    },
    {
        id: 33,
        question: "df[[\"Name\",\"Marks\"]] returns",
        options: ["A string", "An integer", "A DataFrame", "A Series"],
        correctAnswer: "A DataFrame",
        explanation: "The correct answer is A DataFrame"
    },
  ],
  set3: [
    {
        id: 198,
        question: "Extracting weekday name from a datetime column uses",
        options: ["dt.day_name()", "dt.weekname", "dt.name", "dt.weekday_str"],
        correctAnswer: "dt.day_name()",
        explanation: "The correct answer is dt.day_name()"
    },
    {
        id: 196,
        question: "For HR with M=45000, F=55000, the pivot cell (HR, M) is",
        options: ["45000", "50000", "55000", "0"],
        correctAnswer: "45000",
        explanation: "The correct answer is 45000"
    },
    {
        id: 240,
        question: "What is the output of pd.Series([1,2,3]).sum()?",
        options: ["3", "Error", "123", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 271,
        question: "What does df[\"Marks\"].cumsum() return?",
        options: ["Cumulative sum", "Count", "Sum only", "Mean"],
        correctAnswer: "Cumulative sum",
        explanation: "The correct answer is Cumulative sum"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 6,
        question: "The common alias for Pandas is",
        options: ["pa", "pd", "pn", "pas"],
        correctAnswer: "pd",
        explanation: "The correct answer is pd"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 137,
        question: "In the same df, df[\"A\"].sum() is",
        options: ["3", "7", "4", "10"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 58,
        question: "df.to_csv(\"out.csv\", index=False) does what?",
        options: ["Saves only the index", "Saves to CSV without the index column", "Reads CSV", "Deletes index"],
        correctAnswer: "Saves to CSV without the index column",
        explanation: "The correct answer is Saves to CSV without the index column"
    },
    {
        id: 151,
        question: "For the same df, df[df[\"Age\"] > 20][\"Name\"] returns",
        options: ["B and D", "C only", "A and B", "A and C"],
        correctAnswer: "B and D",
        explanation: "The correct answer is B and D"
    },
    {
        id: 223,
        question: "What does df.apply(func) do?",
        options: ["Saves", "Applies a function along an axis", "Reads", "Merges"],
        correctAnswer: "Applies a function along an axis",
        explanation: "The correct answer is Applies a function along an axis"
    },
    {
        id: 81,
        question: "df[\"Age\"].astype(float) converts Age to",
        options: ["int", "float", "bool", "string"],
        correctAnswer: "float",
        explanation: "The correct answer is float"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 2,
        question: "Pandas is a library for which language?",
        options: ["Java", "Ruby", "Python", "C++"],
        correctAnswer: "Python",
        explanation: "The correct answer is Python"
    },
    {
        id: 135,
        question: "Which is 1-dimensional?",
        options: ["Table", "Series", "DataFrame", "Pivot table"],
        correctAnswer: "Series",
        explanation: "The correct answer is Series"
    },
    {
        id: 257,
        question: "What does sort_values return by default?",
        options: ["Nothing", "It modifies in place", "A list", "A new sorted DataFrame"],
        correctAnswer: "A new sorted DataFrame",
        explanation: "The correct answer is A new sorted DataFrame"
    },
    {
        id: 92,
        question: "df.groupby(\"Department\")[\"Salary\"].sum() gives",
        options: ["Average salary", "Index", "Total salary per department", "Min salary"],
        correctAnswer: "Total salary per department",
        explanation: "The correct answer is Total salary per department"
    },
    {
        id: 260,
        question: "What does df.dropna(axis=1) drop?",
        options: ["Columns with missing values", "Everything", "Nothing", "Rows with missing values"],
        correctAnswer: "Columns with missing values",
        explanation: "The correct answer is Columns with missing values"
    },
    {
        id: 55,
        question: "df.info() shows",
        options: ["Only mean", "DataFrame information such as non-null counts and dtypes", "Only first rows", "Only shape"],
        correctAnswer: "DataFrame information such as non-null counts and dtypes",
        explanation: "The correct answer is DataFrame information such as non-null counts and dtypes"
    },
    {
        id: 153,
        question: "For the same df, df.sort_values(\"Marks\", ascending=False).iloc[0][\"Name\"] is",
        options: ["B", "A", "D", "C"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 79,
        question: "df.rename(columns={\"Name\":\"Student_Name\"}) does what?",
        options: ["Sorts", "Renames index", "Deletes Name", "Renames column Name"],
        correctAnswer: "Renames column Name",
        explanation: "The correct answer is Renames column Name"
    },
    {
        id: 192,
        question: "Which function summarizes data by categories in 2D table form?",
        options: ["pivot_table", "astype", "describe", "rename"],
        correctAnswer: "pivot_table",
        explanation: "The correct answer is pivot_table"
    },
    {
        id: 83,
        question: "pd.to_numeric(df[\"Marks\"], errors=\"coerce\") converts invalid values to",
        options: ["0", "-1", "NaN", "Raises error"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 1,
        question: "Pandas is mainly used for",
        options: ["Operating system design", "Audio editing", "Data manipulation and analysis", "Game development"],
        correctAnswer: "Data manipulation and analysis",
        explanation: "The correct answer is Data manipulation and analysis"
    },
    {
        id: 166,
        question: "For the same data, max salary of HR is",
        options: ["60000", "50000", "45000", "55000"],
        correctAnswer: "55000",
        explanation: "The correct answer is 55000"
    },
    {
        id: 251,
        question: "Why is DataFrame.append() discouraged/removed in newer Pandas?",
        options: ["It is faster", "It is for Series only", "It never existed", "It was removed; pd.concat() is used instead"],
        correctAnswer: "It was removed; pd.concat() is used instead",
        explanation: "The correct answer is It was removed; pd.concat() is used instead"
    },
    {
        id: 10,
        question: "Which is the correct import statement?",
        options: ["using pandas", "import pandas as pd", "include pandas", "import pd as pandas"],
        correctAnswer: "import pandas as pd",
        explanation: "The correct answer is import pandas as pd"
    },
    {
        id: 186,
        question: "merge with how=\"outer\" keeps",
        options: ["Nothing", "All rows from both DataFrames", "Only left rows", "Only matching rows"],
        correctAnswer: "All rows from both DataFrames",
        explanation: "The correct answer is All rows from both DataFrames"
    },
    {
        id: 158,
        question: "For the same df, df.iloc[2][\"Name\"] is",
        options: ["C", "D", "A", "B"],
        correctAnswer: "C",
        explanation: "The correct answer is C"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 30,
        question: "A Series is to one column as a DataFrame is to",
        options: ["A table of rows and columns", "A single cell", "A scalar", "A string"],
        correctAnswer: "A table of rows and columns",
        explanation: "The correct answer is A table of rows and columns"
    },
    {
        id: 124,
        question: "Which method changes the data type of a column?",
        options: ["convert()", "changetype()", "astype()", "cast_to()"],
        correctAnswer: "astype()",
        explanation: "The correct answer is astype()"
    },
    {
        id: 291,
        question: "Which statement about NaN is true?",
        options: ["NaN equals zero", "NaN equals NaN", "NaN is not equal to NaN", "NaN equals None always"],
        correctAnswer: "NaN is not equal to NaN",
        explanation: "The correct answer is NaN is not equal to NaN"
    },
    {
        id: 41,
        question: "df.iloc[0:3] returns the",
        options: ["Last three rows", "Rows 1 to 3 inclusive of row 3 by label", "First three rows", "First three columns"],
        correctAnswer: "First three rows",
        explanation: "The correct answer is First three rows"
    },
    {
        id: 44,
        question: "Slicing with iloc 0:2 excludes position 2 because",
        options: ["It is label based", "iloc slices follow Python's end-exclusive rule", "It includes all", "It is a bug"],
        correctAnswer: "iloc slices follow Python's end-exclusive rule",
        explanation: "The correct answer is iloc slices follow Python's end-exclusive rule"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 273,
        question: "What does df.groupby(\"Department\").mean(numeric_only=True) compute?",
        options: ["Sum of strings", "Mean of all strings", "Count of rows", "Mean of numeric columns per department"],
        correctAnswer: "Mean of numeric columns per department",
        explanation: "The correct answer is Mean of numeric columns per department"
    },
    {
        id: 65,
        question: "df.describe() commonly shows all EXCEPT",
        options: ["file size", "std", "count", "mean"],
        correctAnswer: "file size",
        explanation: "The correct answer is file size"
    },
    {
        id: 66,
        question: "Which statistic does describe() show at 50%?",
        options: ["Mean", "Mode", "Median", "Sum"],
        correctAnswer: "Median",
        explanation: "The correct answer is Median"
    },
    {
        id: 244,
        question: "What is the output of pd.Series([1,2,3]) * 2 ?",
        options: ["1, 2, 3, 1, 2, 3", "2, 3, 4", "2, 4, 6", "Error"],
        correctAnswer: "2, 4, 6",
        explanation: "The correct answer is 2, 4, 6"
    },
    {
        id: 282,
        question: "What does df.rename(columns={\"Marks\":\"Score\"}) return when inplace is not set?",
        options: ["A list", "A Series", "Nothing and modifies original", "A new DataFrame"],
        correctAnswer: "A new DataFrame",
        explanation: "The correct answer is A new DataFrame"
    },
    {
        id: 85,
        question: "The pipe operator in Pandas filtering means",
        options: ["Divide", "AND", "NOT", "OR"],
        correctAnswer: "OR",
        explanation: "The correct answer is OR"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
  ],
  set4: [
    {
        id: 271,
        question: "What does df[\"Marks\"].cumsum() return?",
        options: ["Cumulative sum", "Count", "Sum only", "Mean"],
        correctAnswer: "Cumulative sum",
        explanation: "The correct answer is Cumulative sum"
    },
    {
        id: 217,
        question: "What does df.T do?",
        options: ["Tabulates it", "Types it", "Transposes the DataFrame", "Sorts the DataFrame"],
        correctAnswer: "Transposes the DataFrame",
        explanation: "The correct answer is Transposes the DataFrame"
    },
    {
        id: 109,
        question: "df[\"Date\"].dt.day extracts",
        options: ["Day of the month", "Week", "Month", "Year"],
        correctAnswer: "Day of the month",
        explanation: "The correct answer is Day of the month"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 103,
        question: "In pivot_table, the columns parameter defines",
        options: ["The index name", "The row grouping", "The values", "The column grouping"],
        correctAnswer: "The column grouping",
        explanation: "The correct answer is The column grouping"
    },
    {
        id: 160,
        question: "For the same df, df[\"Marks\"] + 5 for the first row is",
        options: ["95", "90", "85", "80"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 205,
        question: "What does len(s) return for a Series with 5 items?",
        options: ["5", "4", "1", "6"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 192,
        question: "Which function summarizes data by categories in 2D table form?",
        options: ["pivot_table", "astype", "describe", "rename"],
        correctAnswer: "pivot_table",
        explanation: "The correct answer is pivot_table"
    },
    {
        id: 225,
        question: "What does df.query(\"Marks > 80\") do?",
        options: ["Deletes rows", "Runs SQL on a database", "Sorts rows", "Filters rows using a string condition"],
        correctAnswer: "Filters rows using a string condition",
        explanation: "The correct answer is Filters rows using a string condition"
    },
    {
        id: 265,
        question: "Which function returns data types and non-null counts together?",
        options: ["df.dtypes", "df.shape", "df.info()", "df.head()"],
        correctAnswer: "df.info()",
        explanation: "The correct answer is df.info()"
    },
    {
        id: 232,
        question: "Which function reads SQL data?",
        options: ["read_sql", "read_query_file", "load_sql_file", "get_sql"],
        correctAnswer: "read_sql",
        explanation: "The correct answer is read_sql"
    },
    {
        id: 62,
        question: "df.head(10) shows",
        options: ["Last 10 rows", "First 10 rows", "10 columns", "Random 10 rows"],
        correctAnswer: "First 10 rows",
        explanation: "The correct answer is First 10 rows"
    },
    {
        id: 127,
        question: "Which method combines DataFrames using a key?",
        options: ["append_key()", "stack()", "merge()", "concat()"],
        correctAnswer: "merge()",
        explanation: "The correct answer is merge()"
    },
    {
        id: 116,
        question: "Which attribute lists column data types?",
        options: ["types()", "schema", "dtypes", "kind"],
        correctAnswer: "dtypes",
        explanation: "The correct answer is dtypes"
    },
    {
        id: 33,
        question: "df[[\"Name\",\"Marks\"]] returns",
        options: ["A string", "An integer", "A DataFrame", "A Series"],
        correctAnswer: "A DataFrame",
        explanation: "The correct answer is A DataFrame"
    },
    {
        id: 174,
        question: "Which is the best way to count rows with null Marks?",
        options: ["df[\"Marks\"].isnull().sum()", "df.nulls", "len(df)", "df[\"Marks\"].count()"],
        correctAnswer: "df[\"Marks\"].isnull().sum()",
        explanation: "The correct answer is df[\"Marks\"].isnull().sum()"
    },
    {
        id: 11,
        question: "For pd.Series([10,20,30,40,50]), the default index of the first element is",
        options: ["-1", "1", "0", "10"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 118,
        question: "Which is a label-based selector?",
        options: ["loc", "index_of", "iloc", "at_pos"],
        correctAnswer: "loc",
        explanation: "The correct answer is loc"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 4,
        question: "A Pandas Series is",
        options: ["A database", "Three-dimensional", "Two-dimensional", "One-dimensional labeled data"],
        correctAnswer: "One-dimensional labeled data",
        explanation: "The correct answer is One-dimensional labeled data"
    },
    {
        id: 37,
        question: "df.iloc[0:2] returns",
        options: ["Rows at positions 0 and 1", "The first two columns", "Only row 2", "Rows at positions 0, 1 and 2"],
        correctAnswer: "Rows at positions 0 and 1",
        explanation: "The correct answer is Rows at positions 0 and 1"
    },
    {
        id: 31,
        question: "Series = 1D, DataFrame = ?",
        options: ["2D", "0D", "3D", "4D"],
        correctAnswer: "2D",
        explanation: "The correct answer is 2D"
    },
    {
        id: 35,
        question: "df.loc[0] selects",
        options: ["The last row", "The row with label 0", "The first column", "All rows"],
        correctAnswer: "The row with label 0",
        explanation: "The correct answer is The row with label 0"
    },
    {
        id: 17,
        question: "s = pd.Series([10,20,30,40]). What is s.sum()?",
        options: ["25", "40", "100", "10"],
        correctAnswer: "100",
        explanation: "The correct answer is 100"
    },
    {
        id: 170,
        question: "In the workflow example, Marks = [85, 90, None, 75]. Mean used by fillna is",
        options: ["83.33", "0", "84.0", "85.0"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 264,
        question: "Which function counts non-null values per column?",
        options: ["df.size", "df.nullcount()", "df.count()", "df.total"],
        correctAnswer: "df.count()",
        explanation: "The correct answer is df.count()"
    },
    {
        id: 122,
        question: "Which replaces missing values?",
        options: ["fillna()", "replacena()", "setna()", "putna()"],
        correctAnswer: "fillna()",
        explanation: "The correct answer is fillna()"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 110,
        question: "df[\"Date\"].dt.day_name() returns",
        options: ["Month name", "Day number", "Name of the weekday", "Year"],
        correctAnswer: "Name of the weekday",
        explanation: "The correct answer is Name of the weekday"
    },
    {
        id: 68,
        question: "pd.read_excel(\"students.xlsx\") reads",
        options: ["A SQL database", "A JSON file", "An Excel file", "A CSV file"],
        correctAnswer: "An Excel file",
        explanation: "The correct answer is An Excel file"
    },
    {
        id: 293,
        question: "What does df[\"Marks\"].between(80, 90) return?",
        options: ["Mean between 80 and 90", "Sorted values", "Boolean mask for values from 80 to 90 inclusive", "Count only"],
        correctAnswer: "Boolean mask for values from 80 to 90 inclusive",
        explanation: "The correct answer is Boolean mask for values from 80 to 90 inclusive"
    },
    {
        id: 296,
        question: "What does pd.DataFrame({\"A\":[1,2]}).T.shape return?",
        options: ["(2, 1)", "(1, 2)", "(2, 2)", "(1, 1)"],
        correctAnswer: "(1, 2)",
        explanation: "The correct answer is (1, 2)"
    },
    {
        id: 243,
        question: "What is the output of pd.Series([5,1,9]).min()?",
        options: ["1", "9", "5", "0"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 125,
        question: "Which method sorts by values?",
        options: ["sort_values()", "sorted_by()", "order()", "arrange()"],
        correctAnswer: "sort_values()",
        explanation: "The correct answer is sort_values()"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 49,
        question: "df.sort_values(\"Marks\") sorts",
        options: ["Randomly", "In ascending order by default", "By index only", "In descending order by default"],
        correctAnswer: "In ascending order by default",
        explanation: "The correct answer is In ascending order by default"
    },
    {
        id: 50,
        question: "To sort in descending order, use",
        options: ["reverse=False", "order=\"desc\"", "descending=True", "ascending=False"],
        correctAnswer: "ascending=False",
        explanation: "The correct answer is ascending=False"
    },
    {
        id: 221,
        question: "What does df.reset_index(drop=True) do?",
        options: ["Sorts index", "Resets the index to 0..n-1 and drops the old one", "Renames columns", "Deletes data"],
        correctAnswer: "Resets the index to 0..n-1 and drops the old one",
        explanation: "The correct answer is Resets the index to 0..n-1 and drops the old one"
    },
    {
        id: 182,
        question: "Which parameter name in merge defines the join type?",
        options: ["how", "join_type", "method", "type"],
        correctAnswer: "how",
        explanation: "The correct answer is how"
    },
    {
        id: 211,
        question: "What does s.unique() give?",
        options: ["Distinct values", "Duplicate values", "Mean", "Count"],
        correctAnswer: "Distinct values",
        explanation: "The correct answer is Distinct values"
    },
    {
        id: 240,
        question: "What is the output of pd.Series([1,2,3]).sum()?",
        options: ["3", "Error", "123", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 28,
        question: "When a DataFrame is created from a dictionary, the dictionary keys become",
        options: ["Index values", "Row labels", "Column names", "Data types"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
    {
        id: 51,
        question: "df.head() shows",
        options: ["Shape", "Column names", "Last 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 32,
        question: "df[\"Name\"] returns",
        options: ["A DataFrame", "A tuple", "A Series", "A list"],
        correctAnswer: "A Series",
        explanation: "The correct answer is A Series"
    },
    {
        id: 207,
        question: "What does pd.Series([\"a\",\"b\"]).dtype return?",
        options: ["int64", "float64", "string only", "object"],
        correctAnswer: "object",
        explanation: "The correct answer is object"
    },
    {
        id: 56,
        question: "df.describe() shows",
        options: ["File path", "Statistical summary", "Missing columns", "Column names"],
        correctAnswer: "Statistical summary",
        explanation: "The correct answer is Statistical summary"
    },
    {
        id: 128,
        question: "Which statement is true for Series?",
        options: ["It must be 2D", "It has an index", "It cannot hold numbers", "It has no index"],
        correctAnswer: "It has an index",
        explanation: "The correct answer is It has an index"
    },
  ],
  set5: [
    {
        id: 99,
        question: "merge() is similar to",
        options: ["Slicing", "Stacking", "Sorting", "SQL JOIN"],
        correctAnswer: "SQL JOIN",
        explanation: "The correct answer is SQL JOIN"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 230,
        question: "Which statement about a Pandas Series is correct?",
        options: ["It is a one-dimensional labeled array", "It can only store text", "It has no index", "It is always two-dimensional"],
        correctAnswer: "It is a one-dimensional labeled array",
        explanation: "The correct answer is It is a one-dimensional labeled array"
    },
    {
        id: 72,
        question: "df.to_json(\"output.json\") saves",
        options: ["To Excel", "To JSON", "To CSV", "To HTML"],
        correctAnswer: "To JSON",
        explanation: "The correct answer is To JSON"
    },
    {
        id: 217,
        question: "What does df.T do?",
        options: ["Tabulates it", "Types it", "Transposes the DataFrame", "Sorts the DataFrame"],
        correctAnswer: "Transposes the DataFrame",
        explanation: "The correct answer is Transposes the DataFrame"
    },
    {
        id: 94,
        question: "pd.merge(df1, df2, on=\"ID\") joins DataFrames using",
        options: ["Shape", "Column names", "Row position", "The ID column"],
        correctAnswer: "The ID column",
        explanation: "The correct answer is The ID column"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 128,
        question: "Which statement is true for Series?",
        options: ["It must be 2D", "It has an index", "It cannot hold numbers", "It has no index"],
        correctAnswer: "It has an index",
        explanation: "The correct answer is It has an index"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 282,
        question: "What does df.rename(columns={\"Marks\":\"Score\"}) return when inplace is not set?",
        options: ["A list", "A Series", "Nothing and modifies original", "A new DataFrame"],
        correctAnswer: "A new DataFrame",
        explanation: "The correct answer is A new DataFrame"
    },
    {
        id: 51,
        question: "df.head() shows",
        options: ["Shape", "Column names", "Last 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 26,
        question: "In a DataFrame, the labels on the left (0,1,2) are called",
        options: ["Headers", "Index / row labels", "Column names", "dtypes"],
        correctAnswer: "Index / row labels",
        explanation: "The correct answer is Index / row labels"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 8,
        question: "In Jupyter Notebook, Pandas can be installed using",
        options: ["pip install pandas", "install!", "!pip install pandas", "%pandas"],
        correctAnswer: "!pip install pandas",
        explanation: "The correct answer is !pip install pandas"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 122,
        question: "Which replaces missing values?",
        options: ["fillna()", "replacena()", "setna()", "putna()"],
        correctAnswer: "fillna()",
        explanation: "The correct answer is fillna()"
    },
    {
        id: 86,
        question: "The ~ operator in Pandas filtering means",
        options: ["AND", "NOT", "Add", "OR"],
        correctAnswer: "NOT",
        explanation: "The correct answer is NOT"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 247,
        question: "Output of pd.Series([10,20,30]).iloc[-1]?",
        options: ["Error", "10", "20", "30"],
        correctAnswer: "30",
        explanation: "The correct answer is 30"
    },
    {
        id: 110,
        question: "df[\"Date\"].dt.day_name() returns",
        options: ["Month name", "Day number", "Name of the weekday", "Year"],
        correctAnswer: "Name of the weekday",
        explanation: "The correct answer is Name of the weekday"
    },
    {
        id: 206,
        question: "What does s.dtype return for pd.Series([1.5, 2.5])?",
        options: ["int64", "bool", "object", "float64"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 31,
        question: "Series = 1D, DataFrame = ?",
        options: ["2D", "0D", "3D", "4D"],
        correctAnswer: "2D",
        explanation: "The correct answer is 2D"
    },
    {
        id: 85,
        question: "The pipe operator in Pandas filtering means",
        options: ["Divide", "AND", "NOT", "OR"],
        correctAnswer: "OR",
        explanation: "The correct answer is OR"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 2,
        question: "Pandas is a library for which language?",
        options: ["Java", "Ruby", "Python", "C++"],
        correctAnswer: "Python",
        explanation: "The correct answer is Python"
    },
    {
        id: 200,
        question: "Which is the safest way to convert strings to numbers?",
        options: ["int()", "astype(int) always", "pd.to_numeric(..., errors=\"coerce\")", "str()"],
        correctAnswer: "pd.to_numeric(..., errors=\"coerce\")",
        explanation: "The correct answer is pd.to_numeric(..., errors=\"coerce\")"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 147,
        question: "Given df = pd.DataFrame({\"Name\":[\"A\",\"B\",\"C\",\"D\"],\"Age\":[20,21,19,22],\"Marks\":[85,90,75,95]}), df[\"Marks\"].mean() is",
        options: ["345", "86.25", "85", "90"],
        correctAnswer: "86.25",
        explanation: "The correct answer is 86.25"
    },
    {
        id: 285,
        question: "What does pd.read_csv(\"f.csv\", usecols=[\"Name\"]) read?",
        options: ["All columns", "Index only", "Only the first row", "Only the Name column"],
        correctAnswer: "Only the Name column",
        explanation: "The correct answer is Only the Name column"
    },
    {
        id: 250,
        question: "Which method adds a new row from another DataFrame in modern Pandas?",
        options: ["df.push()", "df.insertrow()", "df.add_row()", "pd.concat()"],
        correctAnswer: "pd.concat()",
        explanation: "The correct answer is pd.concat()"
    },
    {
        id: 80,
        question: "Which renames all columns at once?",
        options: ["df.columns = [...]", "df.labels = [...]", "df.rename_all()", "df.names = [...]"],
        correctAnswer: "df.columns = [...]",
        explanation: "The correct answer is df.columns = [...]"
    },
    {
        id: 152,
        question: "For the same df, df[\"Marks\"].sum() is",
        options: ["85", "350", "340", "345"],
        correctAnswer: "345",
        explanation: "The correct answer is 345"
    },
    {
        id: 112,
        question: "The .dt accessor works on",
        options: ["Boolean columns", "String columns", "Integer columns", "Datetime columns"],
        correctAnswer: "Datetime columns",
        explanation: "The correct answer is Datetime columns"
    },
    {
        id: 30,
        question: "A Series is to one column as a DataFrame is to",
        options: ["A table of rows and columns", "A single cell", "A scalar", "A string"],
        correctAnswer: "A table of rows and columns",
        explanation: "The correct answer is A table of rows and columns"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 278,
        question: "What does axis=0 mean in Pandas operations?",
        options: ["Along both", "No axis", "Along rows (down the columns)", "Along columns"],
        correctAnswer: "Along rows (down the columns)",
        explanation: "The correct answer is Along rows (down the columns)"
    },
    {
        id: 32,
        question: "df[\"Name\"] returns",
        options: ["A DataFrame", "A tuple", "A Series", "A list"],
        correctAnswer: "A Series",
        explanation: "The correct answer is A Series"
    },
    {
        id: 161,
        question: "For the same df, df[\"Marks\"].median() is",
        options: ["90", "87.5", "86.25", "85"],
        correctAnswer: "87.5",
        explanation: "The correct answer is 87.5"
    },
    {
        id: 245,
        question: "What is the output of pd.Series([1,2,3]) ** 2 ?",
        options: ["Error", "1, 4, 9", "1, 2, 3", "2, 4, 6"],
        correctAnswer: "1, 4, 9",
        explanation: "The correct answer is 1, 4, 9"
    },
    {
        id: 258,
        question: "To sort in place use",
        options: ["place=True", "self=True", "modify=True", "inplace=True"],
        correctAnswer: "inplace=True",
        explanation: "The correct answer is inplace=True"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 81,
        question: "df[\"Age\"].astype(float) converts Age to",
        options: ["int", "float", "bool", "string"],
        correctAnswer: "float",
        explanation: "The correct answer is float"
    },
    {
        id: 261,
        question: "What does df.fillna(method=\"ffill\") do (forward fill)?",
        options: ["Fills with previous valid value", "Fills with mean", "Drops rows", "Fills with zero"],
        correctAnswer: "Fills with previous valid value",
        explanation: "The correct answer is Fills with previous valid value"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 96,
        question: "The result of pd.concat([df1, df2]) is by default",
        options: ["Columns joined side by side", "Rows stacked vertically", "A SQL join", "An error"],
        correctAnswer: "Rows stacked vertically",
        explanation: "The correct answer is Rows stacked vertically"
    },
  ],
  set6: [
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 35,
        question: "df.loc[0] selects",
        options: ["The last row", "The row with label 0", "The first column", "All rows"],
        correctAnswer: "The row with label 0",
        explanation: "The correct answer is The row with label 0"
    },
    {
        id: 121,
        question: "Which removes rows with missing values?",
        options: ["clean()", "dropna()", "deletena()", "removena()"],
        correctAnswer: "dropna()",
        explanation: "The correct answer is dropna()"
    },
    {
        id: 207,
        question: "What does pd.Series([\"a\",\"b\"]).dtype return?",
        options: ["int64", "float64", "string only", "object"],
        correctAnswer: "object",
        explanation: "The correct answer is object"
    },
    {
        id: 62,
        question: "df.head(10) shows",
        options: ["Last 10 rows", "First 10 rows", "10 columns", "Random 10 rows"],
        correctAnswer: "First 10 rows",
        explanation: "The correct answer is First 10 rows"
    },
    {
        id: 292,
        question: "Which method checks for non-missing values?",
        options: ["notnull()", "valid()", "exists()", "isnotnull_only()"],
        correctAnswer: "notnull()",
        explanation: "The correct answer is notnull()"
    },
    {
        id: 127,
        question: "Which method combines DataFrames using a key?",
        options: ["append_key()", "stack()", "merge()", "concat()"],
        correctAnswer: "merge()",
        explanation: "The correct answer is merge()"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 21,
        question: "If s1 = [10,20,30] and s2 = [5,10,15] are Series, s1 + s2 gives",
        options: ["105, 2010, 3015", "Error", "15, 30, 45", "5, 10, 15"],
        correctAnswer: "15, 30, 45",
        explanation: "The correct answer is 15, 30, 45"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 215,
        question: "What does df.drop(\"Age\", axis=1) do?",
        options: ["Drops all", "Renames Age", "Drops the Age column", "Drops the Age row"],
        correctAnswer: "Drops the Age column",
        explanation: "The correct answer is Drops the Age column"
    },
    {
        id: 290,
        question: "Which Pandas object is built on NumPy arrays?",
        options: ["Only SQL tables", "Series and DataFrame columns", "Only Excel files", "Only plots"],
        correctAnswer: "Series and DataFrame columns",
        explanation: "The correct answer is Series and DataFrame columns"
    },
    {
        id: 268,
        question: "What does df.nlargest(2, \"Marks\") return?",
        options: ["Two columns", "Bottom 2 rows", "Top 2 rows by Marks", "Two Marks values only"],
        correctAnswer: "Top 2 rows by Marks",
        explanation: "The correct answer is Top 2 rows by Marks"
    },
    {
        id: 162,
        question: "For the same df, df[\"Age\"].sum() is",
        options: ["82", "78", "80", "84"],
        correctAnswer: "82",
        explanation: "The correct answer is 82"
    },
    {
        id: 134,
        question: "Which has labelled rows and columns?",
        options: ["List", "DataFrame", "Set", "Tuple"],
        correctAnswer: "DataFrame",
        explanation: "The correct answer is DataFrame"
    },
    {
        id: 105,
        question: "In pivot_table, values=\"Salary\" specifies",
        options: ["The index", "The file", "The columns", "The column to aggregate"],
        correctAnswer: "The column to aggregate",
        explanation: "The correct answer is The column to aggregate"
    },
    {
        id: 161,
        question: "For the same df, df[\"Marks\"].median() is",
        options: ["90", "87.5", "86.25", "85"],
        correctAnswer: "87.5",
        explanation: "The correct answer is 87.5"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 203,
        question: "In a Series, what does s.index return?",
        options: ["The mean", "The labels", "The values", "The dtype"],
        correctAnswer: "The labels",
        explanation: "The correct answer is The labels"
    },
    {
        id: 68,
        question: "pd.read_excel(\"students.xlsx\") reads",
        options: ["A SQL database", "A JSON file", "An Excel file", "A CSV file"],
        correctAnswer: "An Excel file",
        explanation: "The correct answer is An Excel file"
    },
    {
        id: 154,
        question: "For the same df, df[\"Marks\"].min() is",
        options: ["75", "85", "95", "90"],
        correctAnswer: "75",
        explanation: "The correct answer is 75"
    },
    {
        id: 235,
        question: "What is NaN?",
        options: ["A string", "A column name", "A missing value marker", "An index"],
        correctAnswer: "A missing value marker",
        explanation: "The correct answer is A missing value marker"
    },
    {
        id: 38,
        question: "df.loc selects data using",
        options: ["Boolean only", "Integer positions only", "Random order", "Labels"],
        correctAnswer: "Labels",
        explanation: "The correct answer is Labels"
    },
    {
        id: 5,
        question: "A DataFrame is",
        options: ["Only a list of strings", "A plotting tool", "Two-dimensional tabular data", "One-dimensional"],
        correctAnswer: "Two-dimensional tabular data",
        explanation: "The correct answer is Two-dimensional tabular data"
    },
    {
        id: 289,
        question: "Which method creates a DataFrame from a NumPy array?",
        options: ["pd.from_np(arr)", "pd.DataFrame(arr)", "pd.numpy(arr)", "pd.Series.frame(arr)"],
        correctAnswer: "pd.DataFrame(arr)",
        explanation: "The correct answer is pd.DataFrame(arr)"
    },
    {
        id: 52,
        question: "df.tail() shows",
        options: ["Column dtypes", "Last 5 rows", "Summary statistics", "First 5 rows"],
        correctAnswer: "Last 5 rows",
        explanation: "The correct answer is Last 5 rows"
    },
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 110,
        question: "df[\"Date\"].dt.day_name() returns",
        options: ["Month name", "Day number", "Name of the weekday", "Year"],
        correctAnswer: "Name of the weekday",
        explanation: "The correct answer is Name of the weekday"
    },
    {
        id: 260,
        question: "What does df.dropna(axis=1) drop?",
        options: ["Columns with missing values", "Everything", "Nothing", "Rows with missing values"],
        correctAnswer: "Columns with missing values",
        explanation: "The correct answer is Columns with missing values"
    },
    {
        id: 179,
        question: "If the index is [\"a\",\"b\",\"c\"], which works?",
        options: ["df.iloc[\"a\"]", "df[\"a\"] for row", "df.loc[\"a\"]", "df.loc[0] always"],
        correctAnswer: "df.loc[\"a\"]",
        explanation: "The correct answer is df.loc[\"a\"]"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 190,
        question: "For pd.concat([df1, df2]) with same columns, rows of result equal",
        options: ["Product of rows", "rows of df1 + rows of df2", "rows of df2", "rows of df1"],
        correctAnswer: "rows of df1 + rows of df2",
        explanation: "The correct answer is rows of df1 + rows of df2"
    },
    {
        id: 146,
        question: "In the same df, df.sum() gives",
        options: ["A=4, B=6", "A=1, B=3", "A=2, B=4", "A=3, B=7"],
        correctAnswer: "A=3, B=7",
        explanation: "The correct answer is A=3, B=7"
    },
    {
        id: 81,
        question: "df[\"Age\"].astype(float) converts Age to",
        options: ["int", "float", "bool", "string"],
        correctAnswer: "float",
        explanation: "The correct answer is float"
    },
    {
        id: 225,
        question: "What does df.query(\"Marks > 80\") do?",
        options: ["Deletes rows", "Runs SQL on a database", "Sorts rows", "Filters rows using a string condition"],
        correctAnswer: "Filters rows using a string condition",
        explanation: "The correct answer is Filters rows using a string condition"
    },
    {
        id: 279,
        question: "What does axis=1 mean in Pandas operations?",
        options: ["Across columns (along each row)", "No axis", "Both axes", "Down the rows"],
        correctAnswer: "Across columns (along each row)",
        explanation: "The correct answer is Across columns (along each row)"
    },
    {
        id: 155,
        question: "For the same df, df[(df[\"Age\"] > 19) & (df[\"Marks\"] > 90)][\"Name\"] is",
        options: ["B", "C", "D", "A"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 271,
        question: "What does df[\"Marks\"].cumsum() return?",
        options: ["Cumulative sum", "Count", "Sum only", "Mean"],
        correctAnswer: "Cumulative sum",
        explanation: "The correct answer is Cumulative sum"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 54,
        question: "df.columns returns",
        options: ["Data types", "Column names", "Row labels", "Rows count"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
    {
        id: 69,
        question: "pd.read_json(\"students.json\") reads",
        options: ["JSON", "Excel", "HTML", "CSV"],
        correctAnswer: "JSON",
        explanation: "The correct answer is JSON"
    },
    {
        id: 60,
        question: "Which is NOT an advantage of Pandas?",
        options: ["Handles missing values", "Supports grouping and aggregation", "Compiles C++ programs", "Reads CSV, Excel, JSON, SQL"],
        correctAnswer: "Compiles C++ programs",
        explanation: "The correct answer is Compiles C++ programs"
    },
    {
        id: 55,
        question: "df.info() shows",
        options: ["Only mean", "DataFrame information such as non-null counts and dtypes", "Only first rows", "Only shape"],
        correctAnswer: "DataFrame information such as non-null counts and dtypes",
        explanation: "The correct answer is DataFrame information such as non-null counts and dtypes"
    },
    {
        id: 80,
        question: "Which renames all columns at once?",
        options: ["df.columns = [...]", "df.labels = [...]", "df.rename_all()", "df.names = [...]"],
        correctAnswer: "df.columns = [...]",
        explanation: "The correct answer is df.columns = [...]"
    },
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 145,
        question: "In the same df, len(df) is",
        options: ["3", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 108,
        question: "df[\"Date\"].dt.month extracts",
        options: ["Day", "Hour", "Year", "Month"],
        correctAnswer: "Month",
        explanation: "The correct answer is Month"
    },
    {
        id: 176,
        question: "Which gives total number of rows including NaN?",
        options: ["df.dropna()", "df.isnull()", "len(df)", "df.count()"],
        correctAnswer: "len(df)",
        explanation: "The correct answer is len(df)"
    },
    {
        id: 259,
        question: "What does df[\"Marks\"].mean() ignore by default?",
        options: ["Strings", "Zero values", "Negative values", "NaN values"],
        correctAnswer: "NaN values",
        explanation: "The correct answer is NaN values"
    },
  ],
  set7: [
    {
        id: 251,
        question: "Why is DataFrame.append() discouraged/removed in newer Pandas?",
        options: ["It is faster", "It is for Series only", "It never existed", "It was removed; pd.concat() is used instead"],
        correctAnswer: "It was removed; pd.concat() is used instead",
        explanation: "The correct answer is It was removed; pd.concat() is used instead"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 27,
        question: "A DataFrame is similar to",
        options: ["A text-only file", "A table in a database or spreadsheet", "A function", "A single number"],
        correctAnswer: "A table in a database or spreadsheet",
        explanation: "The correct answer is A table in a database or spreadsheet"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 217,
        question: "What does df.T do?",
        options: ["Tabulates it", "Types it", "Transposes the DataFrame", "Sorts the DataFrame"],
        correctAnswer: "Transposes the DataFrame",
        explanation: "The correct answer is Transposes the DataFrame"
    },
    {
        id: 142,
        question: "In the same df, df[df[\"A\"] > 1] returns",
        options: ["Row with A=2", "Both rows", "Row with A=1", "No rows"],
        correctAnswer: "Row with A=2",
        explanation: "The correct answer is Row with A=2"
    },
    {
        id: 23,
        question: "For s = pd.Series([10,20,30,40,50]), s[0] returns",
        options: ["10", "20", "Error", "0"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 2,
        question: "Pandas is a library for which language?",
        options: ["Java", "Ruby", "Python", "C++"],
        correctAnswer: "Python",
        explanation: "The correct answer is Python"
    },
    {
        id: 171,
        question: "In that example the missing mark for Charlie after fillna(mean) becomes",
        options: ["75", "83.33", "0", "90"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 67,
        question: "df.describe() shows 25%, 50%, 75% which are",
        options: ["Means", "Counts", "Percentiles (quartiles)", "Sums"],
        correctAnswer: "Percentiles (quartiles)",
        explanation: "The correct answer is Percentiles (quartiles)"
    },
    {
        id: 135,
        question: "Which is 1-dimensional?",
        options: ["Table", "Series", "DataFrame", "Pivot table"],
        correctAnswer: "Series",
        explanation: "The correct answer is Series"
    },
    {
        id: 83,
        question: "pd.to_numeric(df[\"Marks\"], errors=\"coerce\") converts invalid values to",
        options: ["0", "-1", "NaN", "Raises error"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 283,
        question: "Which is the correct way to read a CSV with no index column written by to_csv(index=False)?",
        options: ["pd.read_csv(\"file.csv\")", "pd.read_csv(\"file.csv\", index=True)", "pd.load(\"file.csv\")", "pd.csv(\"file.csv\")"],
        correctAnswer: "pd.read_csv(\"file.csv\")",
        explanation: "The correct answer is pd.read_csv(\"file.csv\")"
    },
    {
        id: 219,
        question: "What does df.corr() compute?",
        options: ["Correlation between numeric columns", "Count", "Median", "Merge"],
        correctAnswer: "Correlation between numeric columns",
        explanation: "The correct answer is Correlation between numeric columns"
    },
    {
        id: 288,
        question: "Which method converts a DataFrame to a NumPy array?",
        options: ["df.numpy()", "df.to_numpy()", "df.array_out()", "df.as_np()"],
        correctAnswer: "df.to_numpy()",
        explanation: "The correct answer is df.to_numpy()"
    },
    {
        id: 5,
        question: "A DataFrame is",
        options: ["Only a list of strings", "A plotting tool", "Two-dimensional tabular data", "One-dimensional"],
        correctAnswer: "Two-dimensional tabular data",
        explanation: "The correct answer is Two-dimensional tabular data"
    },
    {
        id: 58,
        question: "df.to_csv(\"out.csv\", index=False) does what?",
        options: ["Saves only the index", "Saves to CSV without the index column", "Reads CSV", "Deletes index"],
        correctAnswer: "Saves to CSV without the index column",
        explanation: "The correct answer is Saves to CSV without the index column"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 77,
        question: "df.fillna(0) replaces missing values with",
        options: ["Median", "Mode", "Mean", "0"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 280,
        question: "Which pivot_table parameter lists the numeric column to summarize?",
        options: ["target", "data_col", "values", "numbers"],
        correctAnswer: "values",
        explanation: "The correct answer is values"
    },
    {
        id: 19,
        question: "For s = pd.Series([10,20,30,40]), s.max() is",
        options: ["40", "100", "10", "25"],
        correctAnswer: "40",
        explanation: "The correct answer is 40"
    },
    {
        id: 190,
        question: "For pd.concat([df1, df2]) with same columns, rows of result equal",
        options: ["Product of rows", "rows of df1 + rows of df2", "rows of df2", "rows of df1"],
        correctAnswer: "rows of df1 + rows of df2",
        explanation: "The correct answer is rows of df1 + rows of df2"
    },
    {
        id: 76,
        question: "df.dropna() removes",
        options: ["Columns named NaN", "Rows containing missing values", "Duplicates", "All rows"],
        correctAnswer: "Rows containing missing values",
        explanation: "The correct answer is Rows containing missing values"
    },
    {
        id: 221,
        question: "What does df.reset_index(drop=True) do?",
        options: ["Sorts index", "Resets the index to 0..n-1 and drops the old one", "Renames columns", "Deletes data"],
        correctAnswer: "Resets the index to 0..n-1 and drops the old one",
        explanation: "The correct answer is Resets the index to 0..n-1 and drops the old one"
    },
    {
        id: 66,
        question: "Which statistic does describe() show at 50%?",
        options: ["Mean", "Mode", "Median", "Sum"],
        correctAnswer: "Median",
        explanation: "The correct answer is Median"
    },
    {
        id: 22,
        question: "For s = pd.Series([10,20,30,40,50]), s[1:4] returns",
        options: ["10, 20, 30, 40", "20, 30, 40", "20, 30, 40, 50", "30, 40"],
        correctAnswer: "20, 30, 40",
        explanation: "The correct answer is 20, 30, 40"
    },
    {
        id: 158,
        question: "For the same df, df.iloc[2][\"Name\"] is",
        options: ["C", "D", "A", "B"],
        correctAnswer: "C",
        explanation: "The correct answer is C"
    },
    {
        id: 187,
        question: "merge with how=\"inner\" keeps",
        options: ["Only right rows", "All rows", "Only matching rows", "Only left rows"],
        correctAnswer: "Only matching rows",
        explanation: "The correct answer is Only matching rows"
    },
    {
        id: 21,
        question: "If s1 = [10,20,30] and s2 = [5,10,15] are Series, s1 + s2 gives",
        options: ["105, 2010, 3015", "Error", "15, 30, 45", "5, 10, 15"],
        correctAnswer: "15, 30, 45",
        explanation: "The correct answer is 15, 30, 45"
    },
    {
        id: 184,
        question: "merge with how=\"left\" keeps",
        options: ["All rows from the right DataFrame", "Only matching rows", "No rows", "All rows from the left DataFrame"],
        correctAnswer: "All rows from the left DataFrame",
        explanation: "The correct answer is All rows from the left DataFrame"
    },
    {
        id: 108,
        question: "df[\"Date\"].dt.month extracts",
        options: ["Day", "Hour", "Year", "Month"],
        correctAnswer: "Month",
        explanation: "The correct answer is Month"
    },
    {
        id: 128,
        question: "Which statement is true for Series?",
        options: ["It must be 2D", "It has an index", "It cannot hold numbers", "It has no index"],
        correctAnswer: "It has an index",
        explanation: "The correct answer is It has an index"
    },
    {
        id: 53,
        question: "df.shape returns",
        options: ["Number of rows and columns", "Column names", "Memory usage", "Data types"],
        correctAnswer: "Number of rows and columns",
        explanation: "The correct answer is Number of rows and columns"
    },
    {
        id: 182,
        question: "Which parameter name in merge defines the join type?",
        options: ["how", "join_type", "method", "type"],
        correctAnswer: "how",
        explanation: "The correct answer is how"
    },
    {
        id: 287,
        question: "What does pd.read_csv(\"f.csv\", header=None) mean?",
        options: ["File has two headers", "Read only header", "File has no header row", "Skip all data"],
        correctAnswer: "File has no header row",
        explanation: "The correct answer is File has no header row"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 80,
        question: "Which renames all columns at once?",
        options: ["df.columns = [...]", "df.labels = [...]", "df.rename_all()", "df.names = [...]"],
        correctAnswer: "df.columns = [...]",
        explanation: "The correct answer is df.columns = [...]"
    },
    {
        id: 122,
        question: "Which replaces missing values?",
        options: ["fillna()", "replacena()", "setna()", "putna()"],
        correctAnswer: "fillna()",
        explanation: "The correct answer is fillna()"
    },
    {
        id: 84,
        question: "The & operator in Pandas filtering means",
        options: ["NOT", "XOR only", "OR", "AND"],
        correctAnswer: "AND",
        explanation: "The correct answer is AND"
    },
    {
        id: 91,
        question: "df.groupby(\"Department\")[\"Salary\"].mean() gives",
        options: ["Total salary", "Max salary", "Row count", "Average salary per department"],
        correctAnswer: "Average salary per department",
        explanation: "The correct answer is Average salary per department"
    },
    {
        id: 212,
        question: "What does s.value_counts() give?",
        options: ["Mean", "Index", "Frequency of each distinct value", "Sum"],
        correctAnswer: "Frequency of each distinct value",
        explanation: "The correct answer is Frequency of each distinct value"
    },
    {
        id: 13,
        question: "Which creates a Series?",
        options: ["pd.Table([1,2,3])", "pd.Col([1,2,3])", "pd.Array([1,2,3])", "pd.Series([1,2,3])"],
        correctAnswer: "pd.Series([1,2,3])",
        explanation: "The correct answer is pd.Series([1,2,3])"
    },
    {
        id: 92,
        question: "df.groupby(\"Department\")[\"Salary\"].sum() gives",
        options: ["Average salary", "Index", "Total salary per department", "Min salary"],
        correctAnswer: "Total salary per department",
        explanation: "The correct answer is Total salary per department"
    },
    {
        id: 211,
        question: "What does s.unique() give?",
        options: ["Distinct values", "Duplicate values", "Mean", "Count"],
        correctAnswer: "Distinct values",
        explanation: "The correct answer is Distinct values"
    },
    {
        id: 137,
        question: "In the same df, df[\"A\"].sum() is",
        options: ["3", "7", "4", "10"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 82,
        question: "df[\"Age\"].astype(str) converts Age to",
        options: ["bool", "int", "float", "string"],
        correctAnswer: "string",
        explanation: "The correct answer is string"
    },
    {
        id: 56,
        question: "df.describe() shows",
        options: ["File path", "Statistical summary", "Missing columns", "Column names"],
        correctAnswer: "Statistical summary",
        explanation: "The correct answer is Statistical summary"
    },
    {
        id: 196,
        question: "For HR with M=45000, F=55000, the pivot cell (HR, M) is",
        options: ["45000", "50000", "55000", "0"],
        correctAnswer: "45000",
        explanation: "The correct answer is 45000"
    },
    {
        id: 20,
        question: "For s = pd.Series([10,20,30,40]), s.min() is",
        options: ["0", "10", "40", "25"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
  ],
  set8: [
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 114,
        question: "Which writes DataFrame to Excel?",
        options: ["save_xlsx()", "write_excel()", "export()", "to_excel()"],
        correctAnswer: "to_excel()",
        explanation: "The correct answer is to_excel()"
    },
    {
        id: 103,
        question: "In pivot_table, the columns parameter defines",
        options: ["The index name", "The row grouping", "The values", "The column grouping"],
        correctAnswer: "The column grouping",
        explanation: "The correct answer is The column grouping"
    },
    {
        id: 236,
        question: "Which method gives the column names of df as a list-like?",
        options: ["df.keys_only", "df.labels", "df.columns", "df.names()"],
        correctAnswer: "df.columns",
        explanation: "The correct answer is df.columns"
    },
    {
        id: 180,
        question: "If the index is [\"a\",\"b\",\"c\"], df.iloc[0] selects",
        options: ["Error", "Row labelled \"a\"", "Row labelled \"c\"", "Row labelled \"b\""],
        correctAnswer: "Row labelled \"a\"",
        explanation: "The correct answer is Row labelled \"a\""
    },
    {
        id: 157,
        question: "For the same df, df.shape is",
        options: ["(3, 4)", "(4, 3)", "(12, 1)", "(4, 4)"],
        correctAnswer: "(4, 3)",
        explanation: "The correct answer is (4, 3)"
    },
    {
        id: 117,
        question: "Select the single column \"Name\": ?",
        options: ["df.get[Name]", "df[\"Name\"]", "df(Name)", "df[Name]"],
        correctAnswer: "df[\"Name\"]",
        explanation: "The correct answer is df[\"Name\"]"
    },
    {
        id: 115,
        question: "Which of these returns the number of rows and columns?",
        options: ["shape", "dim", "size()", "count_all"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 13,
        question: "Which creates a Series?",
        options: ["pd.Table([1,2,3])", "pd.Col([1,2,3])", "pd.Array([1,2,3])", "pd.Series([1,2,3])"],
        correctAnswer: "pd.Series([1,2,3])",
        explanation: "The correct answer is pd.Series([1,2,3])"
    },
    {
        id: 99,
        question: "merge() is similar to",
        options: ["Slicing", "Stacking", "Sorting", "SQL JOIN"],
        correctAnswer: "SQL JOIN",
        explanation: "The correct answer is SQL JOIN"
    },
    {
        id: 205,
        question: "What does len(s) return for a Series with 5 items?",
        options: ["5", "4", "1", "6"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 169,
        question: "For the same data, how many groups does groupby(\"Department\") produce?",
        options: ["3", "2", "1", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 261,
        question: "What does df.fillna(method=\"ffill\") do (forward fill)?",
        options: ["Fills with previous valid value", "Fills with mean", "Drops rows", "Fills with zero"],
        correctAnswer: "Fills with previous valid value",
        explanation: "The correct answer is Fills with previous valid value"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 170,
        question: "In the workflow example, Marks = [85, 90, None, 75]. Mean used by fillna is",
        options: ["83.33", "0", "84.0", "85.0"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 15,
        question: "s = pd.Series([85,90,78], index=[\"Alice\",\"Bob\",\"Charlie\"]). What is s[\"Bob\"]?",
        options: ["Error", "78", "90", "85"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 60,
        question: "Which is NOT an advantage of Pandas?",
        options: ["Handles missing values", "Supports grouping and aggregation", "Compiles C++ programs", "Reads CSV, Excel, JSON, SQL"],
        correctAnswer: "Compiles C++ programs",
        explanation: "The correct answer is Compiles C++ programs"
    },
    {
        id: 134,
        question: "Which has labelled rows and columns?",
        options: ["List", "DataFrame", "Set", "Tuple"],
        correctAnswer: "DataFrame",
        explanation: "The correct answer is DataFrame"
    },
    {
        id: 92,
        question: "df.groupby(\"Department\")[\"Salary\"].sum() gives",
        options: ["Average salary", "Index", "Total salary per department", "Min salary"],
        correctAnswer: "Total salary per department",
        explanation: "The correct answer is Total salary per department"
    },
    {
        id: 298,
        question: "Which of these will raise an error in a filter condition?",
        options: ["df[df[\"Age\"]>20 and df[\"Marks\"]>80]", "df[~(df[\"Age\"]>20)]", "df[df[\"Age\"]>20]", "df[(df[\"Age\"]>20) & (df[\"Marks\"]>80)]"],
        correctAnswer: "df[df[\"Age\"]>20 and df[\"Marks\"]>80]",
        explanation: "The correct answer is df[df[\"Age\"]>20 and df[\"Marks\"]>80]"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 20,
        question: "For s = pd.Series([10,20,30,40]), s.min() is",
        options: ["0", "10", "40", "25"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 56,
        question: "df.describe() shows",
        options: ["File path", "Statistical summary", "Missing columns", "Column names"],
        correctAnswer: "Statistical summary",
        explanation: "The correct answer is Statistical summary"
    },
    {
        id: 223,
        question: "What does df.apply(func) do?",
        options: ["Saves", "Applies a function along an axis", "Reads", "Merges"],
        correctAnswer: "Applies a function along an axis",
        explanation: "The correct answer is Applies a function along an axis"
    },
    {
        id: 177,
        question: "Which is true about loc?",
        options: ["It only works on columns", "It is position-based", "It is label-based and slice end is inclusive", "It excludes the end label"],
        correctAnswer: "It is label-based and slice end is inclusive",
        explanation: "The correct answer is It is label-based and slice end is inclusive"
    },
    {
        id: 161,
        question: "For the same df, df[\"Marks\"].median() is",
        options: ["90", "87.5", "86.25", "85"],
        correctAnswer: "87.5",
        explanation: "The correct answer is 87.5"
    },
    {
        id: 224,
        question: "What does df[\"Marks\"].apply(lambda x: x*2) do?",
        options: ["Removes marks", "Sorts marks", "Sums marks", "Doubles every mark"],
        correctAnswer: "Doubles every mark",
        explanation: "The correct answer is Doubles every mark"
    },
    {
        id: 262,
        question: "Which fills missing values using the column mean?",
        options: ["df.mean_fill()", "df[\"Marks\"].fillna(df[\"Marks\"].mean())", "df.fill(\"mean\")", "df.fillna(mean)"],
        correctAnswer: "df[\"Marks\"].fillna(df[\"Marks\"].mean())",
        explanation: "The correct answer is df[\"Marks\"].fillna(df[\"Marks\"].mean())"
    },
    {
        id: 198,
        question: "Extracting weekday name from a datetime column uses",
        options: ["dt.day_name()", "dt.weekname", "dt.name", "dt.weekday_str"],
        correctAnswer: "dt.day_name()",
        explanation: "The correct answer is dt.day_name()"
    },
    {
        id: 296,
        question: "What does pd.DataFrame({\"A\":[1,2]}).T.shape return?",
        options: ["(2, 1)", "(1, 2)", "(2, 2)", "(1, 1)"],
        correctAnswer: "(1, 2)",
        explanation: "The correct answer is (1, 2)"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 131,
        question: "Series s + 10 does what?",
        options: ["Error", "Appends 10", "Adds 10 to the index", "Adds 10 to every element"],
        correctAnswer: "Adds 10 to every element",
        explanation: "The correct answer is Adds 10 to every element"
    },
    {
        id: 23,
        question: "For s = pd.Series([10,20,30,40,50]), s[0] returns",
        options: ["10", "20", "Error", "0"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 1,
        question: "Pandas is mainly used for",
        options: ["Operating system design", "Audio editing", "Data manipulation and analysis", "Game development"],
        correctAnswer: "Data manipulation and analysis",
        explanation: "The correct answer is Data manipulation and analysis"
    },
    {
        id: 267,
        question: "What is the typical use of df.sample(3)?",
        options: ["First 3 rows", "Random 3 rows", "Last 3 rows", "Sum of 3 rows"],
        correctAnswer: "Random 3 rows",
        explanation: "The correct answer is Random 3 rows"
    },
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 101,
        question: "Which function creates a pivot table?",
        options: ["pd.table()", "pd.pivot_table()", "pd.summary()", "pd.pivot_df()"],
        correctAnswer: "pd.pivot_table()",
        explanation: "The correct answer is pd.pivot_table()"
    },
    {
        id: 187,
        question: "merge with how=\"inner\" keeps",
        options: ["Only right rows", "All rows", "Only matching rows", "Only left rows"],
        correctAnswer: "Only matching rows",
        explanation: "The correct answer is Only matching rows"
    },
    {
        id: 221,
        question: "What does df.reset_index(drop=True) do?",
        options: ["Sorts index", "Resets the index to 0..n-1 and drops the old one", "Renames columns", "Deletes data"],
        correctAnswer: "Resets the index to 0..n-1 and drops the old one",
        explanation: "The correct answer is Resets the index to 0..n-1 and drops the old one"
    },
    {
        id: 64,
        question: "df.dtypes shows",
        options: ["Column count", "The data type of each column", "Shape", "Only index type"],
        correctAnswer: "The data type of each column",
        explanation: "The correct answer is The data type of each column"
    },
    {
        id: 154,
        question: "For the same df, df[\"Marks\"].min() is",
        options: ["75", "85", "95", "90"],
        correctAnswer: "75",
        explanation: "The correct answer is 75"
    },
    {
        id: 260,
        question: "What does df.dropna(axis=1) drop?",
        options: ["Columns with missing values", "Everything", "Nothing", "Rows with missing values"],
        correctAnswer: "Columns with missing values",
        explanation: "The correct answer is Columns with missing values"
    },
    {
        id: 159,
        question: "For the same df, df.loc[1, \"Marks\"] is",
        options: ["90", "95", "85", "75"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 210,
        question: "What does s.sort_values() do?",
        options: ["Sorts by values", "Renames", "Deletes duplicates", "Sorts by index only"],
        correctAnswer: "Sorts by values",
        explanation: "The correct answer is Sorts by values"
    },
    {
        id: 168,
        question: "For the same data, df.groupby(\"Department\").size() gives IT =",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 207,
        question: "What does pd.Series([\"a\",\"b\"]).dtype return?",
        options: ["int64", "float64", "string only", "object"],
        correctAnswer: "object",
        explanation: "The correct answer is object"
    },
    {
        id: 152,
        question: "For the same df, df[\"Marks\"].sum() is",
        options: ["85", "350", "340", "345"],
        correctAnswer: "345",
        explanation: "The correct answer is 345"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
  ],
  set9: [
    {
        id: 66,
        question: "Which statistic does describe() show at 50%?",
        options: ["Mean", "Mode", "Median", "Sum"],
        correctAnswer: "Median",
        explanation: "The correct answer is Median"
    },
    {
        id: 99,
        question: "merge() is similar to",
        options: ["Slicing", "Stacking", "Sorting", "SQL JOIN"],
        correctAnswer: "SQL JOIN",
        explanation: "The correct answer is SQL JOIN"
    },
    {
        id: 216,
        question: "What does df.drop(0) do (default axis)?",
        options: ["Nothing", "Drops column 0", "Drops row labelled 0", "Drops all rows"],
        correctAnswer: "Drops row labelled 0",
        explanation: "The correct answer is Drops row labelled 0"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 90,
        question: "Which is an aggregation function?",
        options: ["head()", "rename()", "mean()", "read_csv()"],
        correctAnswer: "mean()",
        explanation: "The correct answer is mean()"
    },
    {
        id: 292,
        question: "Which method checks for non-missing values?",
        options: ["notnull()", "valid()", "exists()", "isnotnull_only()"],
        correctAnswer: "notnull()",
        explanation: "The correct answer is notnull()"
    },
    {
        id: 155,
        question: "For the same df, df[(df[\"Age\"] > 19) & (df[\"Marks\"] > 90)][\"Name\"] is",
        options: ["B", "C", "D", "A"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 208,
        question: "What does s.head(2) return?",
        options: ["Mean", "First two items", "Shape", "Last two items"],
        correctAnswer: "First two items",
        explanation: "The correct answer is First two items"
    },
    {
        id: 281,
        question: "Which is NOT a common aggregation function?",
        options: ["max()", "mean()", "rename()", "sum()"],
        correctAnswer: "rename()",
        explanation: "The correct answer is rename()"
    },
    {
        id: 1,
        question: "Pandas is mainly used for",
        options: ["Operating system design", "Audio editing", "Data manipulation and analysis", "Game development"],
        correctAnswer: "Data manipulation and analysis",
        explanation: "The correct answer is Data manipulation and analysis"
    },
    {
        id: 156,
        question: "For the same df, df[\"Age\"].max() is",
        options: ["19", "20", "21", "22"],
        correctAnswer: "22",
        explanation: "The correct answer is 22"
    },
    {
        id: 147,
        question: "Given df = pd.DataFrame({\"Name\":[\"A\",\"B\",\"C\",\"D\"],\"Age\":[20,21,19,22],\"Marks\":[85,90,75,95]}), df[\"Marks\"].mean() is",
        options: ["345", "86.25", "85", "90"],
        correctAnswer: "86.25",
        explanation: "The correct answer is 86.25"
    },
    {
        id: 108,
        question: "df[\"Date\"].dt.month extracts",
        options: ["Day", "Hour", "Year", "Month"],
        correctAnswer: "Month",
        explanation: "The correct answer is Month"
    },
    {
        id: 221,
        question: "What does df.reset_index(drop=True) do?",
        options: ["Sorts index", "Resets the index to 0..n-1 and drops the old one", "Renames columns", "Deletes data"],
        correctAnswer: "Resets the index to 0..n-1 and drops the old one",
        explanation: "The correct answer is Resets the index to 0..n-1 and drops the old one"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 165,
        question: "For the same data, total salary of IT is",
        options: ["110000", "50000", "55000", "60000"],
        correctAnswer: "110000",
        explanation: "The correct answer is 110000"
    },
    {
        id: 239,
        question: "Which of the following creates a Series with a custom index?",
        options: ["pd.Series(index=[1,2,3])", "pd.Series([1,2,3], labels=[\"a\",\"b\",\"c\"])", "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])", "pd.Series.index([\"a\"])"],
        correctAnswer: "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])",
        explanation: "The correct answer is pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 110,
        question: "df[\"Date\"].dt.day_name() returns",
        options: ["Month name", "Day number", "Name of the weekday", "Year"],
        correctAnswer: "Name of the weekday",
        explanation: "The correct answer is Name of the weekday"
    },
    {
        id: 262,
        question: "Which fills missing values using the column mean?",
        options: ["df.mean_fill()", "df[\"Marks\"].fillna(df[\"Marks\"].mean())", "df.fill(\"mean\")", "df.fillna(mean)"],
        correctAnswer: "df[\"Marks\"].fillna(df[\"Marks\"].mean())",
        explanation: "The correct answer is df[\"Marks\"].fillna(df[\"Marks\"].mean())"
    },
    {
        id: 243,
        question: "What is the output of pd.Series([5,1,9]).min()?",
        options: ["1", "9", "5", "0"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 87,
        question: "df[(df[\"Age\"]>20) & (df[\"Marks\"]>80)] requires",
        options: ["Quotes", "Parentheses around each condition", "No parentheses", "Square brackets only"],
        correctAnswer: "Parentheses around each condition",
        explanation: "The correct answer is Parentheses around each condition"
    },
    {
        id: 44,
        question: "Slicing with iloc 0:2 excludes position 2 because",
        options: ["It is label based", "iloc slices follow Python's end-exclusive rule", "It includes all", "It is a bug"],
        correctAnswer: "iloc slices follow Python's end-exclusive rule",
        explanation: "The correct answer is iloc slices follow Python's end-exclusive rule"
    },
    {
        id: 146,
        question: "In the same df, df.sum() gives",
        options: ["A=4, B=6", "A=1, B=3", "A=2, B=4", "A=3, B=7"],
        correctAnswer: "A=3, B=7",
        explanation: "The correct answer is A=3, B=7"
    },
    {
        id: 264,
        question: "Which function counts non-null values per column?",
        options: ["df.size", "df.nullcount()", "df.count()", "df.total"],
        correctAnswer: "df.count()",
        explanation: "The correct answer is df.count()"
    },
    {
        id: 172,
        question: "In that example df[\"Marks\"] has dtype before fillna",
        options: ["float64", "int64", "bool", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 121,
        question: "Which removes rows with missing values?",
        options: ["clean()", "dropna()", "deletena()", "removena()"],
        correctAnswer: "dropna()",
        explanation: "The correct answer is dropna()"
    },
    {
        id: 159,
        question: "For the same df, df.loc[1, \"Marks\"] is",
        options: ["90", "95", "85", "75"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 116,
        question: "Which attribute lists column data types?",
        options: ["types()", "schema", "dtypes", "kind"],
        correctAnswer: "dtypes",
        explanation: "The correct answer is dtypes"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 76,
        question: "df.dropna() removes",
        options: ["Columns named NaN", "Rows containing missing values", "Duplicates", "All rows"],
        correctAnswer: "Rows containing missing values",
        explanation: "The correct answer is Rows containing missing values"
    },
    {
        id: 13,
        question: "Which creates a Series?",
        options: ["pd.Table([1,2,3])", "pd.Col([1,2,3])", "pd.Array([1,2,3])", "pd.Series([1,2,3])"],
        correctAnswer: "pd.Series([1,2,3])",
        explanation: "The correct answer is pd.Series([1,2,3])"
    },
    {
        id: 24,
        question: "The dtype of pd.Series([10,20,30]) is",
        options: ["int64", "float64", "bool", "object"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 244,
        question: "What is the output of pd.Series([1,2,3]) * 2 ?",
        options: ["1, 2, 3, 1, 2, 3", "2, 3, 4", "2, 4, 6", "Error"],
        correctAnswer: "2, 4, 6",
        explanation: "The correct answer is 2, 4, 6"
    },
    {
        id: 38,
        question: "df.loc selects data using",
        options: ["Boolean only", "Integer positions only", "Random order", "Labels"],
        correctAnswer: "Labels",
        explanation: "The correct answer is Labels"
    },
    {
        id: 234,
        question: "Which Pandas feature helps in cleaning data?",
        options: ["dropna() and fillna()", "plot3d()", "hostname()", "compile()"],
        correctAnswer: "dropna() and fillna()",
        explanation: "The correct answer is dropna() and fillna()"
    },
    {
        id: 213,
        question: "What does df.drop_duplicates() do?",
        options: ["Sorts rows", "Removes columns", "Removes duplicate rows", "Removes missing values"],
        correctAnswer: "Removes duplicate rows",
        explanation: "The correct answer is Removes duplicate rows"
    },
    {
        id: 295,
        question: "What does df[\"Name\"].tolist() return?",
        options: ["A DataFrame", "Values as a Python list", "A Series", "A tuple always"],
        correctAnswer: "Values as a Python list",
        explanation: "The correct answer is Values as a Python list"
    },
    {
        id: 100,
        question: "concat() is similar to",
        options: ["Grouping", "Filtering", "SQL JOIN", "Stacking"],
        correctAnswer: "Stacking",
        explanation: "The correct answer is Stacking"
    },
    {
        id: 197,
        question: "Which is a valid way to create dates?",
        options: ["pd.day(\"2026-08-25\")", "pd.date(\"2026-08-25\")", "pd.to_datetime(\"2026-08-25\")", "pd.time_str(\"2026\")"],
        correctAnswer: "pd.to_datetime(\"2026-08-25\")",
        explanation: "The correct answer is pd.to_datetime(\"2026-08-25\")"
    },
    {
        id: 254,
        question: "Which expression gives students with age less than 20 OR marks greater than 80?",
        options: ["df[df[\"Age\"]<20 or df[\"Marks\"]>80]", "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]", "df[df.Age<20 || df.Marks>80]", "df[Age<20, Marks>80]"],
        correctAnswer: "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]",
        explanation: "The correct answer is df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]"
    },
    {
        id: 205,
        question: "What does len(s) return for a Series with 5 items?",
        options: ["5", "4", "1", "6"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 125,
        question: "Which method sorts by values?",
        options: ["sort_values()", "sorted_by()", "order()", "arrange()"],
        correctAnswer: "sort_values()",
        explanation: "The correct answer is sort_values()"
    },
    {
        id: 3,
        question: "The two main data structures in Pandas are",
        options: ["List and Tuple", "Series and DataFrame", "Array and Matrix", "Stack and Queue"],
        correctAnswer: "Series and DataFrame",
        explanation: "The correct answer is Series and DataFrame"
    },
    {
        id: 55,
        question: "df.info() shows",
        options: ["Only mean", "DataFrame information such as non-null counts and dtypes", "Only first rows", "Only shape"],
        correctAnswer: "DataFrame information such as non-null counts and dtypes",
        explanation: "The correct answer is DataFrame information such as non-null counts and dtypes"
    },
    {
        id: 218,
        question: "What does df.nunique() return?",
        options: ["Shape", "Number of unique values per column", "Rows count", "Number of nulls"],
        correctAnswer: "Number of unique values per column",
        explanation: "The correct answer is Number of unique values per column"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 91,
        question: "df.groupby(\"Department\")[\"Salary\"].mean() gives",
        options: ["Total salary", "Max salary", "Row count", "Average salary per department"],
        correctAnswer: "Average salary per department",
        explanation: "The correct answer is Average salary per department"
    },
  ],
  set10: [
    {
        id: 266,
        question: "df.info() output includes",
        options: ["Memory usage", "Median", "Correlation", "Pivot"],
        correctAnswer: "Memory usage",
        explanation: "The correct answer is Memory usage"
    },
    {
        id: 238,
        question: "Which is an exam-style definition of Series?",
        options: ["A table with rows and columns", "A Python function", "A file format", "A one-dimensional labeled array"],
        correctAnswer: "A one-dimensional labeled array",
        explanation: "The correct answer is A one-dimensional labeled array"
    },
    {
        id: 26,
        question: "In a DataFrame, the labels on the left (0,1,2) are called",
        options: ["Headers", "Index / row labels", "Column names", "dtypes"],
        correctAnswer: "Index / row labels",
        explanation: "The correct answer is Index / row labels"
    },
    {
        id: 286,
        question: "What does pd.read_csv(\"f.csv\", sep=\";\") specify?",
        options: ["JSON", "Semicolon-separated values", "Tab-separated", "Space-separated"],
        correctAnswer: "Semicolon-separated values",
        explanation: "The correct answer is Semicolon-separated values"
    },
    {
        id: 128,
        question: "Which statement is true for Series?",
        options: ["It must be 2D", "It has an index", "It cannot hold numbers", "It has no index"],
        correctAnswer: "It has an index",
        explanation: "The correct answer is It has an index"
    },
    {
        id: 63,
        question: "If df.shape is (100, 5), the DataFrame has",
        options: ["100 rows, 5 columns", "5 rows, 100 columns", "100 rows, 100 columns", "500 rows"],
        correctAnswer: "100 rows, 5 columns",
        explanation: "The correct answer is 100 rows, 5 columns"
    },
    {
        id: 234,
        question: "Which Pandas feature helps in cleaning data?",
        options: ["dropna() and fillna()", "plot3d()", "hostname()", "compile()"],
        correctAnswer: "dropna() and fillna()",
        explanation: "The correct answer is dropna() and fillna()"
    },
    {
        id: 69,
        question: "pd.read_json(\"students.json\") reads",
        options: ["JSON", "Excel", "HTML", "CSV"],
        correctAnswer: "JSON",
        explanation: "The correct answer is JSON"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 287,
        question: "What does pd.read_csv(\"f.csv\", header=None) mean?",
        options: ["File has two headers", "Read only header", "File has no header row", "Skip all data"],
        correctAnswer: "File has no header row",
        explanation: "The correct answer is File has no header row"
    },
    {
        id: 163,
        question: "df = pd.DataFrame({\"Department\":[\"IT\",\"IT\",\"HR\",\"HR\"],\"Salary\":[50000,60000,450 00,55000]}). Mean salary of IT is",
        options: ["50000", "60000", "55000", "110000"],
        correctAnswer: "55000",
        explanation: "The correct answer is 55000"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 259,
        question: "What does df[\"Marks\"].mean() ignore by default?",
        options: ["Strings", "Zero values", "Negative values", "NaN values"],
        correctAnswer: "NaN values",
        explanation: "The correct answer is NaN values"
    },
    {
        id: 219,
        question: "What does df.corr() compute?",
        options: ["Correlation between numeric columns", "Count", "Median", "Merge"],
        correctAnswer: "Correlation between numeric columns",
        explanation: "The correct answer is Correlation between numeric columns"
    },
    {
        id: 281,
        question: "Which is NOT a common aggregation function?",
        options: ["max()", "mean()", "rename()", "sum()"],
        correctAnswer: "rename()",
        explanation: "The correct answer is rename()"
    },
    {
        id: 229,
        question: "What does df[\"Name\"].str.contains(\"A\") return?",
        options: ["String", "List", "Boolean Series", "Count"],
        correctAnswer: "Boolean Series",
        explanation: "The correct answer is Boolean Series"
    },
    {
        id: 82,
        question: "df[\"Age\"].astype(str) converts Age to",
        options: ["bool", "int", "float", "string"],
        correctAnswer: "string",
        explanation: "The correct answer is string"
    },
    {
        id: 244,
        question: "What is the output of pd.Series([1,2,3]) * 2 ?",
        options: ["1, 2, 3, 1, 2, 3", "2, 3, 4", "2, 4, 6", "Error"],
        correctAnswer: "2, 4, 6",
        explanation: "The correct answer is 2, 4, 6"
    },
    {
        id: 231,
        question: "Which statement about DataFrame is correct?",
        options: ["It cannot have column names", "It is a two-dimensional labeled structure", "It cannot be sorted", "It is one-dimensional only"],
        correctAnswer: "It is a two-dimensional labeled structure",
        explanation: "The correct answer is It is a two-dimensional labeled structure"
    },
    {
        id: 133,
        question: "If two Series have different index labels, their sum for non-matching labels is",
        options: ["0", "The first value", "Error always", "NaN"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 127,
        question: "Which method combines DataFrames using a key?",
        options: ["append_key()", "stack()", "merge()", "concat()"],
        correctAnswer: "merge()",
        explanation: "The correct answer is merge()"
    },
    {
        id: 142,
        question: "In the same df, df[df[\"A\"] > 1] returns",
        options: ["Row with A=2", "Both rows", "Row with A=1", "No rows"],
        correctAnswer: "Row with A=2",
        explanation: "The correct answer is Row with A=2"
    },
    {
        id: 267,
        question: "What is the typical use of df.sample(3)?",
        options: ["First 3 rows", "Random 3 rows", "Last 3 rows", "Sum of 3 rows"],
        correctAnswer: "Random 3 rows",
        explanation: "The correct answer is Random 3 rows"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 141,
        question: "In the same df, df[\"A\"] * 2 gives",
        options: ["1, 2", "3, 4", "2, 4", "2, 3"],
        correctAnswer: "2, 4",
        explanation: "The correct answer is 2, 4"
    },
    {
        id: 226,
        question: "What does df.isin([...]) check?",
        options: ["Null values", "Whether values are in a list", "Whether index exists", "Whether file exists"],
        correctAnswer: "Whether values are in a list",
        explanation: "The correct answer is Whether values are in a list"
    },
    {
        id: 40,
        question: "df.iloc[0, 1] selects",
        options: ["First row, second column", "The whole first row", "Second row, second column", "First column, second row"],
        correctAnswer: "First row, second column",
        explanation: "The correct answer is First row, second column"
    },
    {
        id: 147,
        question: "Given df = pd.DataFrame({\"Name\":[\"A\",\"B\",\"C\",\"D\"],\"Age\":[20,21,19,22],\"Marks\":[85,90,75,95]}), df[\"Marks\"].mean() is",
        options: ["345", "86.25", "85", "90"],
        correctAnswer: "86.25",
        explanation: "The correct answer is 86.25"
    },
    {
        id: 121,
        question: "Which removes rows with missing values?",
        options: ["clean()", "dropna()", "deletena()", "removena()"],
        correctAnswer: "dropna()",
        explanation: "The correct answer is dropna()"
    },
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 172,
        question: "In that example df[\"Marks\"] has dtype before fillna",
        options: ["float64", "int64", "bool", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 164,
        question: "For the same data, mean salary of HR is",
        options: ["45000", "50000", "55000", "100000"],
        correctAnswer: "50000",
        explanation: "The correct answer is 50000"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 71,
        question: "df.to_excel(\"output.xlsx\", index=False) saves",
        options: ["To JSON", "To CSV", "To Excel without index", "To SQL"],
        correctAnswer: "To Excel without index",
        explanation: "The correct answer is To Excel without index"
    },
    {
        id: 78,
        question: "df[\"Marks\"].fillna(df[\"Marks\"].mean()) fills NaN with",
        options: ["The column median", "The column mean", "The max", "Zero"],
        correctAnswer: "The column mean",
        explanation: "The correct answer is The column mean"
    },
    {
        id: 119,
        question: "Which is a position-based selector?",
        options: ["loc", "find", "label", "iloc"],
        correctAnswer: "iloc",
        explanation: "The correct answer is iloc"
    },
    {
        id: 197,
        question: "Which is a valid way to create dates?",
        options: ["pd.day(\"2026-08-25\")", "pd.date(\"2026-08-25\")", "pd.to_datetime(\"2026-08-25\")", "pd.time_str(\"2026\")"],
        correctAnswer: "pd.to_datetime(\"2026-08-25\")",
        explanation: "The correct answer is pd.to_datetime(\"2026-08-25\")"
    },
    {
        id: 79,
        question: "df.rename(columns={\"Name\":\"Student_Name\"}) does what?",
        options: ["Sorts", "Renames index", "Deletes Name", "Renames column Name"],
        correctAnswer: "Renames column Name",
        explanation: "The correct answer is Renames column Name"
    },
    {
        id: 110,
        question: "df[\"Date\"].dt.day_name() returns",
        options: ["Month name", "Day number", "Name of the weekday", "Year"],
        correctAnswer: "Name of the weekday",
        explanation: "The correct answer is Name of the weekday"
    },
    {
        id: 33,
        question: "df[[\"Name\",\"Marks\"]] returns",
        options: ["A string", "An integer", "A DataFrame", "A Series"],
        correctAnswer: "A DataFrame",
        explanation: "The correct answer is A DataFrame"
    },
    {
        id: 213,
        question: "What does df.drop_duplicates() do?",
        options: ["Sorts rows", "Removes columns", "Removes duplicate rows", "Removes missing values"],
        correctAnswer: "Removes duplicate rows",
        explanation: "The correct answer is Removes duplicate rows"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 170,
        question: "In the workflow example, Marks = [85, 90, None, 75]. Mean used by fillna is",
        options: ["83.33", "0", "84.0", "85.0"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 278,
        question: "What does axis=0 mean in Pandas operations?",
        options: ["Along both", "No axis", "Along rows (down the columns)", "Along columns"],
        correctAnswer: "Along rows (down the columns)",
        explanation: "The correct answer is Along rows (down the columns)"
    },
    {
        id: 239,
        question: "Which of the following creates a Series with a custom index?",
        options: ["pd.Series(index=[1,2,3])", "pd.Series([1,2,3], labels=[\"a\",\"b\",\"c\"])", "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])", "pd.Series.index([\"a\"])"],
        correctAnswer: "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])",
        explanation: "The correct answer is pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])"
    },
    {
        id: 32,
        question: "df[\"Name\"] returns",
        options: ["A DataFrame", "A tuple", "A Series", "A list"],
        correctAnswer: "A Series",
        explanation: "The correct answer is A Series"
    },
    {
        id: 106,
        question: "pd.to_datetime(\"2026-08-25\") returns",
        options: ["A string", "An integer", "A list", "A Timestamp"],
        correctAnswer: "A Timestamp",
        explanation: "The correct answer is A Timestamp"
    },
    {
        id: 216,
        question: "What does df.drop(0) do (default axis)?",
        options: ["Nothing", "Drops column 0", "Drops row labelled 0", "Drops all rows"],
        correctAnswer: "Drops row labelled 0",
        explanation: "The correct answer is Drops row labelled 0"
    },
  ],
  set11: [
    {
        id: 200,
        question: "Which is the safest way to convert strings to numbers?",
        options: ["int()", "astype(int) always", "pd.to_numeric(..., errors=\"coerce\")", "str()"],
        correctAnswer: "pd.to_numeric(..., errors=\"coerce\")",
        explanation: "The correct answer is pd.to_numeric(..., errors=\"coerce\")"
    },
    {
        id: 11,
        question: "For pd.Series([10,20,30,40,50]), the default index of the first element is",
        options: ["-1", "1", "0", "10"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 295,
        question: "What does df[\"Name\"].tolist() return?",
        options: ["A DataFrame", "Values as a Python list", "A Series", "A tuple always"],
        correctAnswer: "Values as a Python list",
        explanation: "The correct answer is Values as a Python list"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 245,
        question: "What is the output of pd.Series([1,2,3]) ** 2 ?",
        options: ["Error", "1, 4, 9", "1, 2, 3", "2, 4, 6"],
        correctAnswer: "1, 4, 9",
        explanation: "The correct answer is 1, 4, 9"
    },
    {
        id: 4,
        question: "A Pandas Series is",
        options: ["A database", "Three-dimensional", "Two-dimensional", "One-dimensional labeled data"],
        correctAnswer: "One-dimensional labeled data",
        explanation: "The correct answer is One-dimensional labeled data"
    },
    {
        id: 181,
        question: "Which method returns first n rows?",
        options: ["start(n)", "head(n)", "top(n)", "first_rows(n)"],
        correctAnswer: "head(n)",
        explanation: "The correct answer is head(n)"
    },
    {
        id: 153,
        question: "For the same df, df.sort_values(\"Marks\", ascending=False).iloc[0][\"Name\"] is",
        options: ["B", "A", "D", "C"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 215,
        question: "What does df.drop(\"Age\", axis=1) do?",
        options: ["Drops all", "Renames Age", "Drops the Age column", "Drops the Age row"],
        correctAnswer: "Drops the Age column",
        explanation: "The correct answer is Drops the Age column"
    },
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 280,
        question: "Which pivot_table parameter lists the numeric column to summarize?",
        options: ["target", "data_col", "values", "numbers"],
        correctAnswer: "values",
        explanation: "The correct answer is values"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 250,
        question: "Which method adds a new row from another DataFrame in modern Pandas?",
        options: ["df.push()", "df.insertrow()", "df.add_row()", "pd.concat()"],
        correctAnswer: "pd.concat()",
        explanation: "The correct answer is pd.concat()"
    },
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 224,
        question: "What does df[\"Marks\"].apply(lambda x: x*2) do?",
        options: ["Removes marks", "Sorts marks", "Sums marks", "Doubles every mark"],
        correctAnswer: "Doubles every mark",
        explanation: "The correct answer is Doubles every mark"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 15,
        question: "s = pd.Series([85,90,78], index=[\"Alice\",\"Bob\",\"Charlie\"]). What is s[\"Bob\"]?",
        options: ["Error", "78", "90", "85"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 173,
        question: "Why is Marks float when it contains None?",
        options: ["Pandas converts all to float", "None is an integer", "NaN is a float value", "It is a string"],
        correctAnswer: "NaN is a float value",
        explanation: "The correct answer is NaN is a float value"
    },
    {
        id: 208,
        question: "What does s.head(2) return?",
        options: ["Mean", "First two items", "Shape", "Last two items"],
        correctAnswer: "First two items",
        explanation: "The correct answer is First two items"
    },
    {
        id: 85,
        question: "The pipe operator in Pandas filtering means",
        options: ["Divide", "AND", "NOT", "OR"],
        correctAnswer: "OR",
        explanation: "The correct answer is OR"
    },
    {
        id: 240,
        question: "What is the output of pd.Series([1,2,3]).sum()?",
        options: ["3", "Error", "123", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 66,
        question: "Which statistic does describe() show at 50%?",
        options: ["Mean", "Mode", "Median", "Sum"],
        correctAnswer: "Median",
        explanation: "The correct answer is Median"
    },
    {
        id: 274,
        question: "Which groupby call gives the number of rows per group?",
        options: ["df.size(\"Department\")", "df.groupby(\"Department\").size()", "df.groupby().len", "df.groupby(\"Department\").rows"],
        correctAnswer: "df.groupby(\"Department\").size()",
        explanation: "The correct answer is df.groupby(\"Department\").size()"
    },
    {
        id: 14,
        question: "Which creates a DataFrame?",
        options: ["pd.DataFrame(data)", "pd.Sheet(data)", "pd.Table(data)", "pd.Frame(data)"],
        correctAnswer: "pd.DataFrame(data)",
        explanation: "The correct answer is pd.DataFrame(data)"
    },
    {
        id: 202,
        question: "errors=\"coerce\" means",
        options: ["Invalid values become NaN", "Invalid values are ignored silently", "Invalid values raise errors", "Invalid values become 0"],
        correctAnswer: "Invalid values become NaN",
        explanation: "The correct answer is Invalid values become NaN"
    },
    {
        id: 289,
        question: "Which method creates a DataFrame from a NumPy array?",
        options: ["pd.from_np(arr)", "pd.DataFrame(arr)", "pd.numpy(arr)", "pd.Series.frame(arr)"],
        correctAnswer: "pd.DataFrame(arr)",
        explanation: "The correct answer is pd.DataFrame(arr)"
    },
    {
        id: 43,
        question: "Slicing with loc using labels 0:2 includes the end label because",
        options: ["iloc is used", "Index is string", "loc slices are end-inclusive", "It is a bug"],
        correctAnswer: "loc slices are end-inclusive",
        explanation: "The correct answer is loc slices are end-inclusive"
    },
    {
        id: 220,
        question: "What does df.copy() do?",
        options: ["Sorts", "Saves to file", "Deletes", "Creates a copy of the DataFrame"],
        correctAnswer: "Creates a copy of the DataFrame",
        explanation: "The correct answer is Creates a copy of the DataFrame"
    },
    {
        id: 70,
        question: "pd.read_sql() is used to",
        options: ["Read data from a SQL database", "Delete a table", "Write a SQL query file", "Create index"],
        correctAnswer: "Read data from a SQL database",
        explanation: "The correct answer is Read data from a SQL database"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 94,
        question: "pd.merge(df1, df2, on=\"ID\") joins DataFrames using",
        options: ["Shape", "Column names", "Row position", "The ID column"],
        correctAnswer: "The ID column",
        explanation: "The correct answer is The ID column"
    },
    {
        id: 26,
        question: "In a DataFrame, the labels on the left (0,1,2) are called",
        options: ["Headers", "Index / row labels", "Column names", "dtypes"],
        correctAnswer: "Index / row labels",
        explanation: "The correct answer is Index / row labels"
    },
    {
        id: 134,
        question: "Which has labelled rows and columns?",
        options: ["List", "DataFrame", "Set", "Tuple"],
        correctAnswer: "DataFrame",
        explanation: "The correct answer is DataFrame"
    },
    {
        id: 168,
        question: "For the same data, df.groupby(\"Department\").size() gives IT =",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 109,
        question: "df[\"Date\"].dt.day extracts",
        options: ["Day of the month", "Week", "Month", "Year"],
        correctAnswer: "Day of the month",
        explanation: "The correct answer is Day of the month"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 216,
        question: "What does df.drop(0) do (default axis)?",
        options: ["Nothing", "Drops column 0", "Drops row labelled 0", "Drops all rows"],
        correctAnswer: "Drops row labelled 0",
        explanation: "The correct answer is Drops row labelled 0"
    },
    {
        id: 130,
        question: "Access a Series value by label: s[\"Alice\"] works when",
        options: ["Value contains \"Alice\"", "Never", "Always", "Index contains \"Alice\""],
        correctAnswer: "Index contains \"Alice\"",
        explanation: "The correct answer is Index contains \"Alice\""
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 10,
        question: "Which is the correct import statement?",
        options: ["using pandas", "import pandas as pd", "include pandas", "import pd as pandas"],
        correctAnswer: "import pandas as pd",
        explanation: "The correct answer is import pandas as pd"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 27,
        question: "A DataFrame is similar to",
        options: ["A text-only file", "A table in a database or spreadsheet", "A function", "A single number"],
        correctAnswer: "A table in a database or spreadsheet",
        explanation: "The correct answer is A table in a database or spreadsheet"
    },
    {
        id: 180,
        question: "If the index is [\"a\",\"b\",\"c\"], df.iloc[0] selects",
        options: ["Error", "Row labelled \"a\"", "Row labelled \"c\"", "Row labelled \"b\""],
        correctAnswer: "Row labelled \"a\"",
        explanation: "The correct answer is Row labelled \"a\""
    },
    {
        id: 115,
        question: "Which of these returns the number of rows and columns?",
        options: ["shape", "dim", "size()", "count_all"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 21,
        question: "If s1 = [10,20,30] and s2 = [5,10,15] are Series, s1 + s2 gives",
        options: ["105, 2010, 3015", "Error", "15, 30, 45", "5, 10, 15"],
        correctAnswer: "15, 30, 45",
        explanation: "The correct answer is 15, 30, 45"
    },
    {
        id: 16,
        question: "When a Series is created from a dictionary, the keys become",
        options: ["Values", "Index labels", "Column names", "The dtype"],
        correctAnswer: "Index labels",
        explanation: "The correct answer is Index labels"
    },
    {
        id: 127,
        question: "Which method combines DataFrames using a key?",
        options: ["append_key()", "stack()", "merge()", "concat()"],
        correctAnswer: "merge()",
        explanation: "The correct answer is merge()"
    },
  ],
  set12: [
    {
        id: 103,
        question: "In pivot_table, the columns parameter defines",
        options: ["The index name", "The row grouping", "The values", "The column grouping"],
        correctAnswer: "The column grouping",
        explanation: "The correct answer is The column grouping"
    },
    {
        id: 11,
        question: "For pd.Series([10,20,30,40,50]), the default index of the first element is",
        options: ["-1", "1", "0", "10"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 79,
        question: "df.rename(columns={\"Name\":\"Student_Name\"}) does what?",
        options: ["Sorts", "Renames index", "Deletes Name", "Renames column Name"],
        correctAnswer: "Renames column Name",
        explanation: "The correct answer is Renames column Name"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 65,
        question: "df.describe() commonly shows all EXCEPT",
        options: ["file size", "std", "count", "mean"],
        correctAnswer: "file size",
        explanation: "The correct answer is file size"
    },
    {
        id: 243,
        question: "What is the output of pd.Series([5,1,9]).min()?",
        options: ["1", "9", "5", "0"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 289,
        question: "Which method creates a DataFrame from a NumPy array?",
        options: ["pd.from_np(arr)", "pd.DataFrame(arr)", "pd.numpy(arr)", "pd.Series.frame(arr)"],
        correctAnswer: "pd.DataFrame(arr)",
        explanation: "The correct answer is pd.DataFrame(arr)"
    },
    {
        id: 112,
        question: "The .dt accessor works on",
        options: ["Boolean columns", "String columns", "Integer columns", "Datetime columns"],
        correctAnswer: "Datetime columns",
        explanation: "The correct answer is Datetime columns"
    },
    {
        id: 239,
        question: "Which of the following creates a Series with a custom index?",
        options: ["pd.Series(index=[1,2,3])", "pd.Series([1,2,3], labels=[\"a\",\"b\",\"c\"])", "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])", "pd.Series.index([\"a\"])"],
        correctAnswer: "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])",
        explanation: "The correct answer is pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])"
    },
    {
        id: 132,
        question: "Series arithmetic aligns on",
        options: ["Values", "Name", "Index labels", "Dtype"],
        correctAnswer: "Index labels",
        explanation: "The correct answer is Index labels"
    },
    {
        id: 189,
        question: "Which is similar to SQL JOIN?",
        options: ["rename", "merge", "concat", "head"],
        correctAnswer: "merge",
        explanation: "The correct answer is merge"
    },
    {
        id: 86,
        question: "The ~ operator in Pandas filtering means",
        options: ["AND", "NOT", "Add", "OR"],
        correctAnswer: "NOT",
        explanation: "The correct answer is NOT"
    },
    {
        id: 84,
        question: "The & operator in Pandas filtering means",
        options: ["NOT", "XOR only", "OR", "AND"],
        correctAnswer: "AND",
        explanation: "The correct answer is AND"
    },
    {
        id: 160,
        question: "For the same df, df[\"Marks\"] + 5 for the first row is",
        options: ["95", "90", "85", "80"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 56,
        question: "df.describe() shows",
        options: ["File path", "Statistical summary", "Missing columns", "Column names"],
        correctAnswer: "Statistical summary",
        explanation: "The correct answer is Statistical summary"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 14,
        question: "Which creates a DataFrame?",
        options: ["pd.DataFrame(data)", "pd.Sheet(data)", "pd.Table(data)", "pd.Frame(data)"],
        correctAnswer: "pd.DataFrame(data)",
        explanation: "The correct answer is pd.DataFrame(data)"
    },
    {
        id: 295,
        question: "What does df[\"Name\"].tolist() return?",
        options: ["A DataFrame", "Values as a Python list", "A Series", "A tuple always"],
        correctAnswer: "Values as a Python list",
        explanation: "The correct answer is Values as a Python list"
    },
    {
        id: 193,
        question: "In pivot_table, which parameter specifies the function applied?",
        options: ["aggfunc", "calc", "func", "method"],
        correctAnswer: "aggfunc",
        explanation: "The correct answer is aggfunc"
    },
    {
        id: 204,
        question: "In a Series, what does s.values return?",
        options: ["The index labels", "The name", "The shape", "The data values"],
        correctAnswer: "The data values",
        explanation: "The correct answer is The data values"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 125,
        question: "Which method sorts by values?",
        options: ["sort_values()", "sorted_by()", "order()", "arrange()"],
        correctAnswer: "sort_values()",
        explanation: "The correct answer is sort_values()"
    },
    {
        id: 53,
        question: "df.shape returns",
        options: ["Number of rows and columns", "Column names", "Memory usage", "Data types"],
        correctAnswer: "Number of rows and columns",
        explanation: "The correct answer is Number of rows and columns"
    },
    {
        id: 155,
        question: "For the same df, df[(df[\"Age\"] > 19) & (df[\"Marks\"] > 90)][\"Name\"] is",
        options: ["B", "C", "D", "A"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 62,
        question: "df.head(10) shows",
        options: ["Last 10 rows", "First 10 rows", "10 columns", "Random 10 rows"],
        correctAnswer: "First 10 rows",
        explanation: "The correct answer is First 10 rows"
    },
    {
        id: 290,
        question: "Which Pandas object is built on NumPy arrays?",
        options: ["Only SQL tables", "Series and DataFrame columns", "Only Excel files", "Only plots"],
        correctAnswer: "Series and DataFrame columns",
        explanation: "The correct answer is Series and DataFrame columns"
    },
    {
        id: 22,
        question: "For s = pd.Series([10,20,30,40,50]), s[1:4] returns",
        options: ["10, 20, 30, 40", "20, 30, 40", "20, 30, 40, 50", "30, 40"],
        correctAnswer: "20, 30, 40",
        explanation: "The correct answer is 20, 30, 40"
    },
    {
        id: 178,
        question: "Which is true about iloc?",
        options: ["It is position-based and slice end is exclusive", "It includes the end position", "It is label-based", "It only works on strings"],
        correctAnswer: "It is position-based and slice end is exclusive",
        explanation: "The correct answer is It is position-based and slice end is exclusive"
    },
    {
        id: 273,
        question: "What does df.groupby(\"Department\").mean(numeric_only=True) compute?",
        options: ["Sum of strings", "Mean of all strings", "Count of rows", "Mean of numeric columns per department"],
        correctAnswer: "Mean of numeric columns per department",
        explanation: "The correct answer is Mean of numeric columns per department"
    },
    {
        id: 220,
        question: "What does df.copy() do?",
        options: ["Sorts", "Saves to file", "Deletes", "Creates a copy of the DataFrame"],
        correctAnswer: "Creates a copy of the DataFrame",
        explanation: "The correct answer is Creates a copy of the DataFrame"
    },
    {
        id: 190,
        question: "For pd.concat([df1, df2]) with same columns, rows of result equal",
        options: ["Product of rows", "rows of df1 + rows of df2", "rows of df2", "rows of df1"],
        correctAnswer: "rows of df1 + rows of df2",
        explanation: "The correct answer is rows of df1 + rows of df2"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 260,
        question: "What does df.dropna(axis=1) drop?",
        options: ["Columns with missing values", "Everything", "Nothing", "Rows with missing values"],
        correctAnswer: "Columns with missing values",
        explanation: "The correct answer is Columns with missing values"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 7,
        question: "Which command installs Pandas?",
        options: ["pandas --setup", "install pandas now", "python get pandas", "pip install pandas"],
        correctAnswer: "pip install pandas",
        explanation: "The correct answer is pip install pandas"
    },
    {
        id: 216,
        question: "What does df.drop(0) do (default axis)?",
        options: ["Nothing", "Drops column 0", "Drops row labelled 0", "Drops all rows"],
        correctAnswer: "Drops row labelled 0",
        explanation: "The correct answer is Drops row labelled 0"
    },
    {
        id: 251,
        question: "Why is DataFrame.append() discouraged/removed in newer Pandas?",
        options: ["It is faster", "It is for Series only", "It never existed", "It was removed; pd.concat() is used instead"],
        correctAnswer: "It was removed; pd.concat() is used instead",
        explanation: "The correct answer is It was removed; pd.concat() is used instead"
    },
    {
        id: 55,
        question: "df.info() shows",
        options: ["Only mean", "DataFrame information such as non-null counts and dtypes", "Only first rows", "Only shape"],
        correctAnswer: "DataFrame information such as non-null counts and dtypes",
        explanation: "The correct answer is DataFrame information such as non-null counts and dtypes"
    },
    {
        id: 222,
        question: "What does df.set_index(\"Name\") do?",
        options: ["Makes Name column the index", "Sorts by Name", "Drops Name", "Renames Name"],
        correctAnswer: "Makes Name column the index",
        explanation: "The correct answer is Makes Name column the index"
    },
    {
        id: 186,
        question: "merge with how=\"outer\" keeps",
        options: ["Nothing", "All rows from both DataFrames", "Only left rows", "Only matching rows"],
        correctAnswer: "All rows from both DataFrames",
        explanation: "The correct answer is All rows from both DataFrames"
    },
    {
        id: 236,
        question: "Which method gives the column names of df as a list-like?",
        options: ["df.keys_only", "df.labels", "df.columns", "df.names()"],
        correctAnswer: "df.columns",
        explanation: "The correct answer is df.columns"
    },
    {
        id: 223,
        question: "What does df.apply(func) do?",
        options: ["Saves", "Applies a function along an axis", "Reads", "Merges"],
        correctAnswer: "Applies a function along an axis",
        explanation: "The correct answer is Applies a function along an axis"
    },
    {
        id: 91,
        question: "df.groupby(\"Department\")[\"Salary\"].mean() gives",
        options: ["Total salary", "Max salary", "Row count", "Average salary per department"],
        correctAnswer: "Average salary per department",
        explanation: "The correct answer is Average salary per department"
    },
    {
        id: 268,
        question: "What does df.nlargest(2, \"Marks\") return?",
        options: ["Two columns", "Bottom 2 rows", "Top 2 rows by Marks", "Two Marks values only"],
        correctAnswer: "Top 2 rows by Marks",
        explanation: "The correct answer is Top 2 rows by Marks"
    },
    {
        id: 139,
        question: "In the same df, df.iloc[1,0] is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 248,
        question: "Output of pd.Series([10,20,30]).shape?",
        options: ["(1,3)", "(3,)", "3", "(3,1)"],
        correctAnswer: "(3,)",
        explanation: "The correct answer is (3,)"
    },
    {
        id: 224,
        question: "What does df[\"Marks\"].apply(lambda x: x*2) do?",
        options: ["Removes marks", "Sorts marks", "Sums marks", "Doubles every mark"],
        correctAnswer: "Doubles every mark",
        explanation: "The correct answer is Doubles every mark"
    },
  ],
  set13: [
    {
        id: 138,
        question: "In the same df, df[\"B\"].mean() is",
        options: ["3", "7", "3.5", "4"],
        correctAnswer: "3.5",
        explanation: "The correct answer is 3.5"
    },
    {
        id: 166,
        question: "For the same data, max salary of HR is",
        options: ["60000", "50000", "45000", "55000"],
        correctAnswer: "55000",
        explanation: "The correct answer is 55000"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 45,
        question: "To add a new column City to df, use",
        options: ["df.city()", "df.add(\"City\")", "df.append(\"City\")", "df[\"City\"] = [...]"],
        correctAnswer: "df[\"City\"] = [...]",
        explanation: "The correct answer is df[\"City\"] = [...]"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 231,
        question: "Which statement about DataFrame is correct?",
        options: ["It cannot have column names", "It is a two-dimensional labeled structure", "It cannot be sorted", "It is one-dimensional only"],
        correctAnswer: "It is a two-dimensional labeled structure",
        explanation: "The correct answer is It is a two-dimensional labeled structure"
    },
    {
        id: 125,
        question: "Which method sorts by values?",
        options: ["sort_values()", "sorted_by()", "order()", "arrange()"],
        correctAnswer: "sort_values()",
        explanation: "The correct answer is sort_values()"
    },
    {
        id: 238,
        question: "Which is an exam-style definition of Series?",
        options: ["A table with rows and columns", "A Python function", "A file format", "A one-dimensional labeled array"],
        correctAnswer: "A one-dimensional labeled array",
        explanation: "The correct answer is A one-dimensional labeled array"
    },
    {
        id: 292,
        question: "Which method checks for non-missing values?",
        options: ["notnull()", "valid()", "exists()", "isnotnull_only()"],
        correctAnswer: "notnull()",
        explanation: "The correct answer is notnull()"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 173,
        question: "Why is Marks float when it contains None?",
        options: ["Pandas converts all to float", "None is an integer", "NaN is a float value", "It is a string"],
        correctAnswer: "NaN is a float value",
        explanation: "The correct answer is NaN is a float value"
    },
    {
        id: 15,
        question: "s = pd.Series([85,90,78], index=[\"Alice\",\"Bob\",\"Charlie\"]). What is s[\"Bob\"]?",
        options: ["Error", "78", "90", "85"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 254,
        question: "Which expression gives students with age less than 20 OR marks greater than 80?",
        options: ["df[df[\"Age\"]<20 or df[\"Marks\"]>80]", "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]", "df[df.Age<20 || df.Marks>80]", "df[Age<20, Marks>80]"],
        correctAnswer: "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]",
        explanation: "The correct answer is df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]"
    },
    {
        id: 167,
        question: "For the same data, min salary of IT is",
        options: ["45000", "50000", "60000", "55000"],
        correctAnswer: "50000",
        explanation: "The correct answer is 50000"
    },
    {
        id: 94,
        question: "pd.merge(df1, df2, on=\"ID\") joins DataFrames using",
        options: ["Shape", "Column names", "Row position", "The ID column"],
        correctAnswer: "The ID column",
        explanation: "The correct answer is The ID column"
    },
    {
        id: 250,
        question: "Which method adds a new row from another DataFrame in modern Pandas?",
        options: ["df.push()", "df.insertrow()", "df.add_row()", "pd.concat()"],
        correctAnswer: "pd.concat()",
        explanation: "The correct answer is pd.concat()"
    },
    {
        id: 109,
        question: "df[\"Date\"].dt.day extracts",
        options: ["Day of the month", "Week", "Month", "Year"],
        correctAnswer: "Day of the month",
        explanation: "The correct answer is Day of the month"
    },
    {
        id: 182,
        question: "Which parameter name in merge defines the join type?",
        options: ["how", "join_type", "method", "type"],
        correctAnswer: "how",
        explanation: "The correct answer is how"
    },
    {
        id: 133,
        question: "If two Series have different index labels, their sum for non-matching labels is",
        options: ["0", "The first value", "Error always", "NaN"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 144,
        question: "In the same df, df.size is",
        options: ["3", "4", "8", "2"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 142,
        question: "In the same df, df[df[\"A\"] > 1] returns",
        options: ["Row with A=2", "Both rows", "Row with A=1", "No rows"],
        correctAnswer: "Row with A=2",
        explanation: "The correct answer is Row with A=2"
    },
    {
        id: 285,
        question: "What does pd.read_csv(\"f.csv\", usecols=[\"Name\"]) read?",
        options: ["All columns", "Index only", "Only the first row", "Only the Name column"],
        correctAnswer: "Only the Name column",
        explanation: "The correct answer is Only the Name column"
    },
    {
        id: 6,
        question: "The common alias for Pandas is",
        options: ["pa", "pd", "pn", "pas"],
        correctAnswer: "pd",
        explanation: "The correct answer is pd"
    },
    {
        id: 265,
        question: "Which function returns data types and non-null counts together?",
        options: ["df.dtypes", "df.shape", "df.info()", "df.head()"],
        correctAnswer: "df.info()",
        explanation: "The correct answer is df.info()"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 44,
        question: "Slicing with iloc 0:2 excludes position 2 because",
        options: ["It is label based", "iloc slices follow Python's end-exclusive rule", "It includes all", "It is a bug"],
        correctAnswer: "iloc slices follow Python's end-exclusive rule",
        explanation: "The correct answer is iloc slices follow Python's end-exclusive rule"
    },
    {
        id: 124,
        question: "Which method changes the data type of a column?",
        options: ["convert()", "changetype()", "astype()", "cast_to()"],
        correctAnswer: "astype()",
        explanation: "The correct answer is astype()"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 251,
        question: "Why is DataFrame.append() discouraged/removed in newer Pandas?",
        options: ["It is faster", "It is for Series only", "It never existed", "It was removed; pd.concat() is used instead"],
        correctAnswer: "It was removed; pd.concat() is used instead",
        explanation: "The correct answer is It was removed; pd.concat() is used instead"
    },
    {
        id: 244,
        question: "What is the output of pd.Series([1,2,3]) * 2 ?",
        options: ["1, 2, 3, 1, 2, 3", "2, 3, 4", "2, 4, 6", "Error"],
        correctAnswer: "2, 4, 6",
        explanation: "The correct answer is 2, 4, 6"
    },
    {
        id: 252,
        question: "Which is the correct way to select rows 0 to 2 by position (3 rows)?",
        options: ["df.iloc[1:3]", "df.iloc[0:2]", "df.loc[0:3]", "df.iloc[0:3]"],
        correctAnswer: "df.iloc[0:3]",
        explanation: "The correct answer is df.iloc[0:3]"
    },
    {
        id: 230,
        question: "Which statement about a Pandas Series is correct?",
        options: ["It is a one-dimensional labeled array", "It can only store text", "It has no index", "It is always two-dimensional"],
        correctAnswer: "It is a one-dimensional labeled array",
        explanation: "The correct answer is It is a one-dimensional labeled array"
    },
    {
        id: 9,
        question: "Which attribute shows the installed Pandas version?",
        options: ["pd.ver", "pd.version()", "pd.release", "pd.__version__"],
        correctAnswer: "pd.__version__",
        explanation: "The correct answer is pd.__version__"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 151,
        question: "For the same df, df[df[\"Age\"] > 20][\"Name\"] returns",
        options: ["B and D", "C only", "A and B", "A and C"],
        correctAnswer: "B and D",
        explanation: "The correct answer is B and D"
    },
    {
        id: 114,
        question: "Which writes DataFrame to Excel?",
        options: ["save_xlsx()", "write_excel()", "export()", "to_excel()"],
        correctAnswer: "to_excel()",
        explanation: "The correct answer is to_excel()"
    },
    {
        id: 208,
        question: "What does s.head(2) return?",
        options: ["Mean", "First two items", "Shape", "Last two items"],
        correctAnswer: "First two items",
        explanation: "The correct answer is First two items"
    },
    {
        id: 157,
        question: "For the same df, df.shape is",
        options: ["(3, 4)", "(4, 3)", "(12, 1)", "(4, 4)"],
        correctAnswer: "(4, 3)",
        explanation: "The correct answer is (4, 3)"
    },
    {
        id: 298,
        question: "Which of these will raise an error in a filter condition?",
        options: ["df[df[\"Age\"]>20 and df[\"Marks\"]>80]", "df[~(df[\"Age\"]>20)]", "df[df[\"Age\"]>20]", "df[(df[\"Age\"]>20) & (df[\"Marks\"]>80)]"],
        correctAnswer: "df[df[\"Age\"]>20 and df[\"Marks\"]>80]",
        explanation: "The correct answer is df[df[\"Age\"]>20 and df[\"Marks\"]>80]"
    },
    {
        id: 189,
        question: "Which is similar to SQL JOIN?",
        options: ["rename", "merge", "concat", "head"],
        correctAnswer: "merge",
        explanation: "The correct answer is merge"
    },
    {
        id: 243,
        question: "What is the output of pd.Series([5,1,9]).min()?",
        options: ["1", "9", "5", "0"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 177,
        question: "Which is true about loc?",
        options: ["It only works on columns", "It is position-based", "It is label-based and slice end is inclusive", "It excludes the end label"],
        correctAnswer: "It is label-based and slice end is inclusive",
        explanation: "The correct answer is It is label-based and slice end is inclusive"
    },
    {
        id: 218,
        question: "What does df.nunique() return?",
        options: ["Shape", "Number of unique values per column", "Rows count", "Number of nulls"],
        correctAnswer: "Number of unique values per column",
        explanation: "The correct answer is Number of unique values per column"
    },
    {
        id: 282,
        question: "What does df.rename(columns={\"Marks\":\"Score\"}) return when inplace is not set?",
        options: ["A list", "A Series", "Nothing and modifies original", "A new DataFrame"],
        correctAnswer: "A new DataFrame",
        explanation: "The correct answer is A new DataFrame"
    },
    {
        id: 170,
        question: "In the workflow example, Marks = [85, 90, None, 75]. Mean used by fillna is",
        options: ["83.33", "0", "84.0", "85.0"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 181,
        question: "Which method returns first n rows?",
        options: ["start(n)", "head(n)", "top(n)", "first_rows(n)"],
        correctAnswer: "head(n)",
        explanation: "The correct answer is head(n)"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
  ],
  set14: [
    {
        id: 139,
        question: "In the same df, df.iloc[1,0] is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 157,
        question: "For the same df, df.shape is",
        options: ["(3, 4)", "(4, 3)", "(12, 1)", "(4, 4)"],
        correctAnswer: "(4, 3)",
        explanation: "The correct answer is (4, 3)"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 119,
        question: "Which is a position-based selector?",
        options: ["loc", "find", "label", "iloc"],
        correctAnswer: "iloc",
        explanation: "The correct answer is iloc"
    },
    {
        id: 62,
        question: "df.head(10) shows",
        options: ["Last 10 rows", "First 10 rows", "10 columns", "Random 10 rows"],
        correctAnswer: "First 10 rows",
        explanation: "The correct answer is First 10 rows"
    },
    {
        id: 99,
        question: "merge() is similar to",
        options: ["Slicing", "Stacking", "Sorting", "SQL JOIN"],
        correctAnswer: "SQL JOIN",
        explanation: "The correct answer is SQL JOIN"
    },
    {
        id: 162,
        question: "For the same df, df[\"Age\"].sum() is",
        options: ["82", "78", "80", "84"],
        correctAnswer: "82",
        explanation: "The correct answer is 82"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 95,
        question: "Which is NOT a join type in merge()?",
        options: ["inner", "middle", "right", "left"],
        correctAnswer: "middle",
        explanation: "The correct answer is middle"
    },
    {
        id: 111,
        question: "pd.date_range(start=\"2026-01-01\", end=\"2026-01-10\") generates",
        options: ["Only two dates", "11 daily dates", "10 daily dates", "9 daily dates"],
        correctAnswer: "10 daily dates",
        explanation: "The correct answer is 10 daily dates"
    },
    {
        id: 248,
        question: "Output of pd.Series([10,20,30]).shape?",
        options: ["(1,3)", "(3,)", "3", "(3,1)"],
        correctAnswer: "(3,)",
        explanation: "The correct answer is (3,)"
    },
    {
        id: 142,
        question: "In the same df, df[df[\"A\"] > 1] returns",
        options: ["Row with A=2", "Both rows", "Row with A=1", "No rows"],
        correctAnswer: "Row with A=2",
        explanation: "The correct answer is Row with A=2"
    },
    {
        id: 269,
        question: "What does df.nsmallest(2, \"Marks\") return?",
        options: ["Mean", "Top 2 rows", "Two columns", "Bottom 2 rows by Marks"],
        correctAnswer: "Bottom 2 rows by Marks",
        explanation: "The correct answer is Bottom 2 rows by Marks"
    },
    {
        id: 145,
        question: "In the same df, len(df) is",
        options: ["3", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 52,
        question: "df.tail() shows",
        options: ["Column dtypes", "Last 5 rows", "Summary statistics", "First 5 rows"],
        correctAnswer: "Last 5 rows",
        explanation: "The correct answer is Last 5 rows"
    },
    {
        id: 100,
        question: "concat() is similar to",
        options: ["Grouping", "Filtering", "SQL JOIN", "Stacking"],
        correctAnswer: "Stacking",
        explanation: "The correct answer is Stacking"
    },
    {
        id: 152,
        question: "For the same df, df[\"Marks\"].sum() is",
        options: ["85", "350", "340", "345"],
        correctAnswer: "345",
        explanation: "The correct answer is 345"
    },
    {
        id: 117,
        question: "Select the single column \"Name\": ?",
        options: ["df.get[Name]", "df[\"Name\"]", "df(Name)", "df[Name]"],
        correctAnswer: "df[\"Name\"]",
        explanation: "The correct answer is df[\"Name\"]"
    },
    {
        id: 185,
        question: "merge with how=\"right\" keeps",
        options: ["No rows", "All rows from the left DataFrame", "All rows from the right DataFrame", "Only matching rows"],
        correctAnswer: "All rows from the right DataFrame",
        explanation: "The correct answer is All rows from the right DataFrame"
    },
    {
        id: 92,
        question: "df.groupby(\"Department\")[\"Salary\"].sum() gives",
        options: ["Average salary", "Index", "Total salary per department", "Min salary"],
        correctAnswer: "Total salary per department",
        explanation: "The correct answer is Total salary per department"
    },
    {
        id: 155,
        question: "For the same df, df[(df[\"Age\"] > 19) & (df[\"Marks\"] > 90)][\"Name\"] is",
        options: ["B", "C", "D", "A"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 8,
        question: "In Jupyter Notebook, Pandas can be installed using",
        options: ["pip install pandas", "install!", "!pip install pandas", "%pandas"],
        correctAnswer: "!pip install pandas",
        explanation: "The correct answer is !pip install pandas"
    },
    {
        id: 274,
        question: "Which groupby call gives the number of rows per group?",
        options: ["df.size(\"Department\")", "df.groupby(\"Department\").size()", "df.groupby().len", "df.groupby(\"Department\").rows"],
        correctAnswer: "df.groupby(\"Department\").size()",
        explanation: "The correct answer is df.groupby(\"Department\").size()"
    },
    {
        id: 65,
        question: "df.describe() commonly shows all EXCEPT",
        options: ["file size", "std", "count", "mean"],
        correctAnswer: "file size",
        explanation: "The correct answer is file size"
    },
    {
        id: 141,
        question: "In the same df, df[\"A\"] * 2 gives",
        options: ["1, 2", "3, 4", "2, 4", "2, 3"],
        correctAnswer: "2, 4",
        explanation: "The correct answer is 2, 4"
    },
    {
        id: 24,
        question: "The dtype of pd.Series([10,20,30]) is",
        options: ["int64", "float64", "bool", "object"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 28,
        question: "When a DataFrame is created from a dictionary, the dictionary keys become",
        options: ["Index values", "Row labels", "Column names", "Data types"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
    {
        id: 284,
        question: "What does pd.read_csv(\"f.csv\", nrows=5) read?",
        options: ["5 columns", "Last 5 rows", "Random 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 150,
        question: "For the same df, df[\"Age\"].min() is",
        options: ["20", "21", "19", "22"],
        correctAnswer: "19",
        explanation: "The correct answer is 19"
    },
    {
        id: 252,
        question: "Which is the correct way to select rows 0 to 2 by position (3 rows)?",
        options: ["df.iloc[1:3]", "df.iloc[0:2]", "df.loc[0:3]", "df.iloc[0:3]"],
        correctAnswer: "df.iloc[0:3]",
        explanation: "The correct answer is df.iloc[0:3]"
    },
    {
        id: 53,
        question: "df.shape returns",
        options: ["Number of rows and columns", "Column names", "Memory usage", "Data types"],
        correctAnswer: "Number of rows and columns",
        explanation: "The correct answer is Number of rows and columns"
    },
    {
        id: 7,
        question: "Which command installs Pandas?",
        options: ["pandas --setup", "install pandas now", "python get pandas", "pip install pandas"],
        correctAnswer: "pip install pandas",
        explanation: "The correct answer is pip install pandas"
    },
    {
        id: 294,
        question: "What does df.columns.tolist() return?",
        options: ["Dtype list", "Row list", "Values list", "Column names as a Python list"],
        correctAnswer: "Column names as a Python list",
        explanation: "The correct answer is Column names as a Python list"
    },
    {
        id: 146,
        question: "In the same df, df.sum() gives",
        options: ["A=4, B=6", "A=1, B=3", "A=2, B=4", "A=3, B=7"],
        correctAnswer: "A=3, B=7",
        explanation: "The correct answer is A=3, B=7"
    },
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 246,
        question: "Output of pd.Series([10,20,30])[2]?",
        options: ["30", "Error", "20", "10"],
        correctAnswer: "30",
        explanation: "The correct answer is 30"
    },
    {
        id: 226,
        question: "What does df.isin([...]) check?",
        options: ["Null values", "Whether values are in a list", "Whether index exists", "Whether file exists"],
        correctAnswer: "Whether values are in a list",
        explanation: "The correct answer is Whether values are in a list"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 27,
        question: "A DataFrame is similar to",
        options: ["A text-only file", "A table in a database or spreadsheet", "A function", "A single number"],
        correctAnswer: "A table in a database or spreadsheet",
        explanation: "The correct answer is A table in a database or spreadsheet"
    },
    {
        id: 130,
        question: "Access a Series value by label: s[\"Alice\"] works when",
        options: ["Value contains \"Alice\"", "Never", "Always", "Index contains \"Alice\""],
        correctAnswer: "Index contains \"Alice\"",
        explanation: "The correct answer is Index contains \"Alice\""
    },
    {
        id: 245,
        question: "What is the output of pd.Series([1,2,3]) ** 2 ?",
        options: ["Error", "1, 4, 9", "1, 2, 3", "2, 4, 6"],
        correctAnswer: "1, 4, 9",
        explanation: "The correct answer is 1, 4, 9"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 34,
        question: "Which is used to select multiple columns?",
        options: ["df(A,B)", "df[[\"A\",\"B\"]]", "df[\"A\",\"B\"]", "df.get(A,B)"],
        correctAnswer: "df[[\"A\",\"B\"]]",
        explanation: "The correct answer is df[[\"A\",\"B\"]]"
    },
    {
        id: 206,
        question: "What does s.dtype return for pd.Series([1.5, 2.5])?",
        options: ["int64", "bool", "object", "float64"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 38,
        question: "df.loc selects data using",
        options: ["Boolean only", "Integer positions only", "Random order", "Labels"],
        correctAnswer: "Labels",
        explanation: "The correct answer is Labels"
    },
    {
        id: 296,
        question: "What does pd.DataFrame({\"A\":[1,2]}).T.shape return?",
        options: ["(2, 1)", "(1, 2)", "(2, 2)", "(1, 1)"],
        correctAnswer: "(1, 2)",
        explanation: "The correct answer is (1, 2)"
    },
    {
        id: 78,
        question: "df[\"Marks\"].fillna(df[\"Marks\"].mean()) fills NaN with",
        options: ["The column median", "The column mean", "The max", "Zero"],
        correctAnswer: "The column mean",
        explanation: "The correct answer is The column mean"
    },
    {
        id: 77,
        question: "df.fillna(0) replaces missing values with",
        options: ["Median", "Mode", "Mean", "0"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 289,
        question: "Which method creates a DataFrame from a NumPy array?",
        options: ["pd.from_np(arr)", "pd.DataFrame(arr)", "pd.numpy(arr)", "pd.Series.frame(arr)"],
        correctAnswer: "pd.DataFrame(arr)",
        explanation: "The correct answer is pd.DataFrame(arr)"
    },
    {
        id: 156,
        question: "For the same df, df[\"Age\"].max() is",
        options: ["19", "20", "21", "22"],
        correctAnswer: "22",
        explanation: "The correct answer is 22"
    },
  ],
  set15: [
    {
        id: 44,
        question: "Slicing with iloc 0:2 excludes position 2 because",
        options: ["It is label based", "iloc slices follow Python's end-exclusive rule", "It includes all", "It is a bug"],
        correctAnswer: "iloc slices follow Python's end-exclusive rule",
        explanation: "The correct answer is iloc slices follow Python's end-exclusive rule"
    },
    {
        id: 128,
        question: "Which statement is true for Series?",
        options: ["It must be 2D", "It has an index", "It cannot hold numbers", "It has no index"],
        correctAnswer: "It has an index",
        explanation: "The correct answer is It has an index"
    },
    {
        id: 61,
        question: "Pandas works well with",
        options: ["Only Excel", "Only SQL", "Nothing else", "NumPy and Matplotlib"],
        correctAnswer: "NumPy and Matplotlib",
        explanation: "The correct answer is NumPy and Matplotlib"
    },
    {
        id: 286,
        question: "What does pd.read_csv(\"f.csv\", sep=\";\") specify?",
        options: ["JSON", "Semicolon-separated values", "Tab-separated", "Space-separated"],
        correctAnswer: "Semicolon-separated values",
        explanation: "The correct answer is Semicolon-separated values"
    },
    {
        id: 214,
        question: "What does df.duplicated() return?",
        options: ["Nothing", "Dropped rows", "Count only", "Boolean Series marking duplicate rows"],
        correctAnswer: "Boolean Series marking duplicate rows",
        explanation: "The correct answer is Boolean Series marking duplicate rows"
    },
    {
        id: 116,
        question: "Which attribute lists column data types?",
        options: ["types()", "schema", "dtypes", "kind"],
        correctAnswer: "dtypes",
        explanation: "The correct answer is dtypes"
    },
    {
        id: 268,
        question: "What does df.nlargest(2, \"Marks\") return?",
        options: ["Two columns", "Bottom 2 rows", "Top 2 rows by Marks", "Two Marks values only"],
        correctAnswer: "Top 2 rows by Marks",
        explanation: "The correct answer is Top 2 rows by Marks"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 231,
        question: "Which statement about DataFrame is correct?",
        options: ["It cannot have column names", "It is a two-dimensional labeled structure", "It cannot be sorted", "It is one-dimensional only"],
        correctAnswer: "It is a two-dimensional labeled structure",
        explanation: "The correct answer is It is a two-dimensional labeled structure"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 153,
        question: "For the same df, df.sort_values(\"Marks\", ascending=False).iloc[0][\"Name\"] is",
        options: ["B", "A", "D", "C"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 220,
        question: "What does df.copy() do?",
        options: ["Sorts", "Saves to file", "Deletes", "Creates a copy of the DataFrame"],
        correctAnswer: "Creates a copy of the DataFrame",
        explanation: "The correct answer is Creates a copy of the DataFrame"
    },
    {
        id: 157,
        question: "For the same df, df.shape is",
        options: ["(3, 4)", "(4, 3)", "(12, 1)", "(4, 4)"],
        correctAnswer: "(4, 3)",
        explanation: "The correct answer is (4, 3)"
    },
    {
        id: 292,
        question: "Which method checks for non-missing values?",
        options: ["notnull()", "valid()", "exists()", "isnotnull_only()"],
        correctAnswer: "notnull()",
        explanation: "The correct answer is notnull()"
    },
    {
        id: 31,
        question: "Series = 1D, DataFrame = ?",
        options: ["2D", "0D", "3D", "4D"],
        correctAnswer: "2D",
        explanation: "The correct answer is 2D"
    },
    {
        id: 51,
        question: "df.head() shows",
        options: ["Shape", "Column names", "Last 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 107,
        question: "df[\"Date\"].dt.year extracts",
        options: ["Year", "Month", "Weekday", "Day"],
        correctAnswer: "Year",
        explanation: "The correct answer is Year"
    },
    {
        id: 109,
        question: "df[\"Date\"].dt.day extracts",
        options: ["Day of the month", "Week", "Month", "Year"],
        correctAnswer: "Day of the month",
        explanation: "The correct answer is Day of the month"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 81,
        question: "df[\"Age\"].astype(float) converts Age to",
        options: ["int", "float", "bool", "string"],
        correctAnswer: "float",
        explanation: "The correct answer is float"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 89,
        question: "df.sort_values([\"Age\",\"Marks\"], ascending=[True, False]) sorts",
        options: ["Age descending, Marks ascending", "Both descending", "Both ascending", "Age ascending, Marks descending"],
        correctAnswer: "Age ascending, Marks descending",
        explanation: "The correct answer is Age ascending, Marks descending"
    },
    {
        id: 283,
        question: "Which is the correct way to read a CSV with no index column written by to_csv(index=False)?",
        options: ["pd.read_csv(\"file.csv\")", "pd.read_csv(\"file.csv\", index=True)", "pd.load(\"file.csv\")", "pd.csv(\"file.csv\")"],
        correctAnswer: "pd.read_csv(\"file.csv\")",
        explanation: "The correct answer is pd.read_csv(\"file.csv\")"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 2,
        question: "Pandas is a library for which language?",
        options: ["Java", "Ruby", "Python", "C++"],
        correctAnswer: "Python",
        explanation: "The correct answer is Python"
    },
    {
        id: 210,
        question: "What does s.sort_values() do?",
        options: ["Sorts by values", "Renames", "Deletes duplicates", "Sorts by index only"],
        correctAnswer: "Sorts by values",
        explanation: "The correct answer is Sorts by values"
    },
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 150,
        question: "For the same df, df[\"Age\"].min() is",
        options: ["20", "21", "19", "22"],
        correctAnswer: "19",
        explanation: "The correct answer is 19"
    },
    {
        id: 17,
        question: "s = pd.Series([10,20,30,40]). What is s.sum()?",
        options: ["25", "40", "100", "10"],
        correctAnswer: "100",
        explanation: "The correct answer is 100"
    },
    {
        id: 119,
        question: "Which is a position-based selector?",
        options: ["loc", "find", "label", "iloc"],
        correctAnswer: "iloc",
        explanation: "The correct answer is iloc"
    },
    {
        id: 148,
        question: "For the same df, df[\"Marks\"].max() is",
        options: ["75", "95", "85", "90"],
        correctAnswer: "95",
        explanation: "The correct answer is 95"
    },
    {
        id: 145,
        question: "In the same df, len(df) is",
        options: ["3", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 37,
        question: "df.iloc[0:2] returns",
        options: ["Rows at positions 0 and 1", "The first two columns", "Only row 2", "Rows at positions 0, 1 and 2"],
        correctAnswer: "Rows at positions 0 and 1",
        explanation: "The correct answer is Rows at positions 0 and 1"
    },
    {
        id: 120,
        question: "Which counts missing values in each column?",
        options: ["df.missing()", "df.isnull().sum()", "df.nan()", "df.count_null()"],
        correctAnswer: "df.isnull().sum()",
        explanation: "The correct answer is df.isnull().sum()"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 218,
        question: "What does df.nunique() return?",
        options: ["Shape", "Number of unique values per column", "Rows count", "Number of nulls"],
        correctAnswer: "Number of unique values per column",
        explanation: "The correct answer is Number of unique values per column"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 279,
        question: "What does axis=1 mean in Pandas operations?",
        options: ["Across columns (along each row)", "No axis", "Both axes", "Down the rows"],
        correctAnswer: "Across columns (along each row)",
        explanation: "The correct answer is Across columns (along each row)"
    },
    {
        id: 77,
        question: "df.fillna(0) replaces missing values with",
        options: ["Median", "Mode", "Mean", "0"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 137,
        question: "In the same df, df[\"A\"].sum() is",
        options: ["3", "7", "4", "10"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 73,
        question: "Missing data in Pandas is commonly represented as",
        options: ["NaN", "Zero", "None only", "Empty string"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 85,
        question: "The pipe operator in Pandas filtering means",
        options: ["Divide", "AND", "NOT", "OR"],
        correctAnswer: "OR",
        explanation: "The correct answer is OR"
    },
    {
        id: 158,
        question: "For the same df, df.iloc[2][\"Name\"] is",
        options: ["C", "D", "A", "B"],
        correctAnswer: "C",
        explanation: "The correct answer is C"
    },
    {
        id: 225,
        question: "What does df.query(\"Marks > 80\") do?",
        options: ["Deletes rows", "Runs SQL on a database", "Sorts rows", "Filters rows using a string condition"],
        correctAnswer: "Filters rows using a string condition",
        explanation: "The correct answer is Filters rows using a string condition"
    },
    {
        id: 64,
        question: "df.dtypes shows",
        options: ["Column count", "The data type of each column", "Shape", "Only index type"],
        correctAnswer: "The data type of each column",
        explanation: "The correct answer is The data type of each column"
    },
    {
        id: 240,
        question: "What is the output of pd.Series([1,2,3]).sum()?",
        options: ["3", "Error", "123", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 156,
        question: "For the same df, df[\"Age\"].max() is",
        options: ["19", "20", "21", "22"],
        correctAnswer: "22",
        explanation: "The correct answer is 22"
    },
    {
        id: 207,
        question: "What does pd.Series([\"a\",\"b\"]).dtype return?",
        options: ["int64", "float64", "string only", "object"],
        correctAnswer: "object",
        explanation: "The correct answer is object"
    },
  ],
  set16: [
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 257,
        question: "What does sort_values return by default?",
        options: ["Nothing", "It modifies in place", "A list", "A new sorted DataFrame"],
        correctAnswer: "A new sorted DataFrame",
        explanation: "The correct answer is A new sorted DataFrame"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 253,
        question: "What does df.loc[df[\"Marks\"] > 80, \"Name\"] return?",
        options: ["Error", "Marks above 80", "All rows", "Names of students with Marks above 80"],
        correctAnswer: "Names of students with Marks above 80",
        explanation: "The correct answer is Names of students with Marks above 80"
    },
    {
        id: 225,
        question: "What does df.query(\"Marks > 80\") do?",
        options: ["Deletes rows", "Runs SQL on a database", "Sorts rows", "Filters rows using a string condition"],
        correctAnswer: "Filters rows using a string condition",
        explanation: "The correct answer is Filters rows using a string condition"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 21,
        question: "If s1 = [10,20,30] and s2 = [5,10,15] are Series, s1 + s2 gives",
        options: ["105, 2010, 3015", "Error", "15, 30, 45", "5, 10, 15"],
        correctAnswer: "15, 30, 45",
        explanation: "The correct answer is 15, 30, 45"
    },
    {
        id: 222,
        question: "What does df.set_index(\"Name\") do?",
        options: ["Makes Name column the index", "Sorts by Name", "Drops Name", "Renames Name"],
        correctAnswer: "Makes Name column the index",
        explanation: "The correct answer is Makes Name column the index"
    },
    {
        id: 166,
        question: "For the same data, max salary of HR is",
        options: ["60000", "50000", "45000", "55000"],
        correctAnswer: "55000",
        explanation: "The correct answer is 55000"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 14,
        question: "Which creates a DataFrame?",
        options: ["pd.DataFrame(data)", "pd.Sheet(data)", "pd.Table(data)", "pd.Frame(data)"],
        correctAnswer: "pd.DataFrame(data)",
        explanation: "The correct answer is pd.DataFrame(data)"
    },
    {
        id: 47,
        question: "df[df[\"Marks\"] > 80] returns",
        options: ["Rows where Marks are 80", "A boolean Series only", "Rows where Marks are greater than 80", "Only the Marks column"],
        correctAnswer: "Rows where Marks are greater than 80",
        explanation: "The correct answer is Rows where Marks are greater than 80"
    },
    {
        id: 118,
        question: "Which is a label-based selector?",
        options: ["loc", "index_of", "iloc", "at_pos"],
        correctAnswer: "loc",
        explanation: "The correct answer is loc"
    },
    {
        id: 295,
        question: "What does df[\"Name\"].tolist() return?",
        options: ["A DataFrame", "Values as a Python list", "A Series", "A tuple always"],
        correctAnswer: "Values as a Python list",
        explanation: "The correct answer is Values as a Python list"
    },
    {
        id: 11,
        question: "For pd.Series([10,20,30,40,50]), the default index of the first element is",
        options: ["-1", "1", "0", "10"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 138,
        question: "In the same df, df[\"B\"].mean() is",
        options: ["3", "7", "3.5", "4"],
        correctAnswer: "3.5",
        explanation: "The correct answer is 3.5"
    },
    {
        id: 296,
        question: "What does pd.DataFrame({\"A\":[1,2]}).T.shape return?",
        options: ["(2, 1)", "(1, 2)", "(2, 2)", "(1, 1)"],
        correctAnswer: "(1, 2)",
        explanation: "The correct answer is (1, 2)"
    },
    {
        id: 90,
        question: "Which is an aggregation function?",
        options: ["head()", "rename()", "mean()", "read_csv()"],
        correctAnswer: "mean()",
        explanation: "The correct answer is mean()"
    },
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 266,
        question: "df.info() output includes",
        options: ["Memory usage", "Median", "Correlation", "Pivot"],
        correctAnswer: "Memory usage",
        explanation: "The correct answer is Memory usage"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 143,
        question: "In the same df, df.columns has",
        options: ["Nothing", "A and B", "X and Y", "0 and 1"],
        correctAnswer: "A and B",
        explanation: "The correct answer is A and B"
    },
    {
        id: 93,
        question: ".agg([\"mean\",\"min\",\"max\"]) after groupby returns",
        options: ["Multiple aggregations", "An error", "Only mean", "Only max"],
        correctAnswer: "Multiple aggregations",
        explanation: "The correct answer is Multiple aggregations"
    },
    {
        id: 224,
        question: "What does df[\"Marks\"].apply(lambda x: x*2) do?",
        options: ["Removes marks", "Sorts marks", "Sums marks", "Doubles every mark"],
        correctAnswer: "Doubles every mark",
        explanation: "The correct answer is Doubles every mark"
    },
    {
        id: 252,
        question: "Which is the correct way to select rows 0 to 2 by position (3 rows)?",
        options: ["df.iloc[1:3]", "df.iloc[0:2]", "df.loc[0:3]", "df.iloc[0:3]"],
        correctAnswer: "df.iloc[0:3]",
        explanation: "The correct answer is df.iloc[0:3]"
    },
    {
        id: 179,
        question: "If the index is [\"a\",\"b\",\"c\"], which works?",
        options: ["df.iloc[\"a\"]", "df[\"a\"] for row", "df.loc[\"a\"]", "df.loc[0] always"],
        correctAnswer: "df.loc[\"a\"]",
        explanation: "The correct answer is df.loc[\"a\"]"
    },
    {
        id: 210,
        question: "What does s.sort_values() do?",
        options: ["Sorts by values", "Renames", "Deletes duplicates", "Sorts by index only"],
        correctAnswer: "Sorts by values",
        explanation: "The correct answer is Sorts by values"
    },
    {
        id: 171,
        question: "In that example the missing mark for Charlie after fillna(mean) becomes",
        options: ["75", "83.33", "0", "90"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 165,
        question: "For the same data, total salary of IT is",
        options: ["110000", "50000", "55000", "60000"],
        correctAnswer: "110000",
        explanation: "The correct answer is 110000"
    },
    {
        id: 54,
        question: "df.columns returns",
        options: ["Data types", "Column names", "Row labels", "Rows count"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
    {
        id: 83,
        question: "pd.to_numeric(df[\"Marks\"], errors=\"coerce\") converts invalid values to",
        options: ["0", "-1", "NaN", "Raises error"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 169,
        question: "For the same data, how many groups does groupby(\"Department\") produce?",
        options: ["3", "2", "1", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 211,
        question: "What does s.unique() give?",
        options: ["Distinct values", "Duplicate values", "Mean", "Count"],
        correctAnswer: "Distinct values",
        explanation: "The correct answer is Distinct values"
    },
    {
        id: 254,
        question: "Which expression gives students with age less than 20 OR marks greater than 80?",
        options: ["df[df[\"Age\"]<20 or df[\"Marks\"]>80]", "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]", "df[df.Age<20 || df.Marks>80]", "df[Age<20, Marks>80]"],
        correctAnswer: "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]",
        explanation: "The correct answer is df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]"
    },
    {
        id: 148,
        question: "For the same df, df[\"Marks\"].max() is",
        options: ["75", "95", "85", "90"],
        correctAnswer: "95",
        explanation: "The correct answer is 95"
    },
    {
        id: 206,
        question: "What does s.dtype return for pd.Series([1.5, 2.5])?",
        options: ["int64", "bool", "object", "float64"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 282,
        question: "What does df.rename(columns={\"Marks\":\"Score\"}) return when inplace is not set?",
        options: ["A list", "A Series", "Nothing and modifies original", "A new DataFrame"],
        correctAnswer: "A new DataFrame",
        explanation: "The correct answer is A new DataFrame"
    },
    {
        id: 19,
        question: "For s = pd.Series([10,20,30,40]), s.max() is",
        options: ["40", "100", "10", "25"],
        correctAnswer: "40",
        explanation: "The correct answer is 40"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 46,
        question: "df[\"Marks\"] = df[\"Marks\"] + 5 does what?",
        options: ["Renames Marks", "Adds 5 rows", "Adds 5 to every mark", "Deletes Marks"],
        correctAnswer: "Adds 5 to every mark",
        explanation: "The correct answer is Adds 5 to every mark"
    },
    {
        id: 162,
        question: "For the same df, df[\"Age\"].sum() is",
        options: ["82", "78", "80", "84"],
        correctAnswer: "82",
        explanation: "The correct answer is 82"
    },
    {
        id: 130,
        question: "Access a Series value by label: s[\"Alice\"] works when",
        options: ["Value contains \"Alice\"", "Never", "Always", "Index contains \"Alice\""],
        correctAnswer: "Index contains \"Alice\"",
        explanation: "The correct answer is Index contains \"Alice\""
    },
    {
        id: 60,
        question: "Which is NOT an advantage of Pandas?",
        options: ["Handles missing values", "Supports grouping and aggregation", "Compiles C++ programs", "Reads CSV, Excel, JSON, SQL"],
        correctAnswer: "Compiles C++ programs",
        explanation: "The correct answer is Compiles C++ programs"
    },
    {
        id: 207,
        question: "What does pd.Series([\"a\",\"b\"]).dtype return?",
        options: ["int64", "float64", "string only", "object"],
        correctAnswer: "object",
        explanation: "The correct answer is object"
    },
    {
        id: 264,
        question: "Which function counts non-null values per column?",
        options: ["df.size", "df.nullcount()", "df.count()", "df.total"],
        correctAnswer: "df.count()",
        explanation: "The correct answer is df.count()"
    },
    {
        id: 1,
        question: "Pandas is mainly used for",
        options: ["Operating system design", "Audio editing", "Data manipulation and analysis", "Game development"],
        correctAnswer: "Data manipulation and analysis",
        explanation: "The correct answer is Data manipulation and analysis"
    },
    {
        id: 278,
        question: "What does axis=0 mean in Pandas operations?",
        options: ["Along both", "No axis", "Along rows (down the columns)", "Along columns"],
        correctAnswer: "Along rows (down the columns)",
        explanation: "The correct answer is Along rows (down the columns)"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 212,
        question: "What does s.value_counts() give?",
        options: ["Mean", "Index", "Frequency of each distinct value", "Sum"],
        correctAnswer: "Frequency of each distinct value",
        explanation: "The correct answer is Frequency of each distinct value"
    },
    {
        id: 28,
        question: "When a DataFrame is created from a dictionary, the dictionary keys become",
        options: ["Index values", "Row labels", "Column names", "Data types"],
        correctAnswer: "Column names",
        explanation: "The correct answer is Column names"
    },
  ],
  set17: [
    {
        id: 97,
        question: "pd.concat([df1, df2], axis=1) combines",
        options: ["Column-wise", "Row-wise", "Not at all", "By key"],
        correctAnswer: "Column-wise",
        explanation: "The correct answer is Column-wise"
    },
    {
        id: 266,
        question: "df.info() output includes",
        options: ["Memory usage", "Median", "Correlation", "Pivot"],
        correctAnswer: "Memory usage",
        explanation: "The correct answer is Memory usage"
    },
    {
        id: 186,
        question: "merge with how=\"outer\" keeps",
        options: ["Nothing", "All rows from both DataFrames", "Only left rows", "Only matching rows"],
        correctAnswer: "All rows from both DataFrames",
        explanation: "The correct answer is All rows from both DataFrames"
    },
    {
        id: 256,
        question: "Which of the following sorts by index?",
        options: ["df.index_sort()", "df.sort_values()", "df.order_index()", "df.sort_index()"],
        correctAnswer: "df.sort_index()",
        explanation: "The correct answer is df.sort_index()"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 27,
        question: "A DataFrame is similar to",
        options: ["A text-only file", "A table in a database or spreadsheet", "A function", "A single number"],
        correctAnswer: "A table in a database or spreadsheet",
        explanation: "The correct answer is A table in a database or spreadsheet"
    },
    {
        id: 105,
        question: "In pivot_table, values=\"Salary\" specifies",
        options: ["The index", "The file", "The columns", "The column to aggregate"],
        correctAnswer: "The column to aggregate",
        explanation: "The correct answer is The column to aggregate"
    },
    {
        id: 137,
        question: "In the same df, df[\"A\"].sum() is",
        options: ["3", "7", "4", "10"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 282,
        question: "What does df.rename(columns={\"Marks\":\"Score\"}) return when inplace is not set?",
        options: ["A list", "A Series", "Nothing and modifies original", "A new DataFrame"],
        correctAnswer: "A new DataFrame",
        explanation: "The correct answer is A new DataFrame"
    },
    {
        id: 68,
        question: "pd.read_excel(\"students.xlsx\") reads",
        options: ["A SQL database", "A JSON file", "An Excel file", "A CSV file"],
        correctAnswer: "An Excel file",
        explanation: "The correct answer is An Excel file"
    },
    {
        id: 148,
        question: "For the same df, df[\"Marks\"].max() is",
        options: ["75", "95", "85", "90"],
        correctAnswer: "95",
        explanation: "The correct answer is 95"
    },
    {
        id: 225,
        question: "What does df.query(\"Marks > 80\") do?",
        options: ["Deletes rows", "Runs SQL on a database", "Sorts rows", "Filters rows using a string condition"],
        correctAnswer: "Filters rows using a string condition",
        explanation: "The correct answer is Filters rows using a string condition"
    },
    {
        id: 249,
        question: "Output of pd.Series([10,20,30]).size?",
        options: ["3", "30", "1", "60"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 63,
        question: "If df.shape is (100, 5), the DataFrame has",
        options: ["100 rows, 5 columns", "5 rows, 100 columns", "100 rows, 100 columns", "500 rows"],
        correctAnswer: "100 rows, 5 columns",
        explanation: "The correct answer is 100 rows, 5 columns"
    },
    {
        id: 15,
        question: "s = pd.Series([85,90,78], index=[\"Alice\",\"Bob\",\"Charlie\"]). What is s[\"Bob\"]?",
        options: ["Error", "78", "90", "85"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 82,
        question: "df[\"Age\"].astype(str) converts Age to",
        options: ["bool", "int", "float", "string"],
        correctAnswer: "string",
        explanation: "The correct answer is string"
    },
    {
        id: 160,
        question: "For the same df, df[\"Marks\"] + 5 for the first row is",
        options: ["95", "90", "85", "80"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 283,
        question: "Which is the correct way to read a CSV with no index column written by to_csv(index=False)?",
        options: ["pd.read_csv(\"file.csv\")", "pd.read_csv(\"file.csv\", index=True)", "pd.load(\"file.csv\")", "pd.csv(\"file.csv\")"],
        correctAnswer: "pd.read_csv(\"file.csv\")",
        explanation: "The correct answer is pd.read_csv(\"file.csv\")"
    },
    {
        id: 8,
        question: "In Jupyter Notebook, Pandas can be installed using",
        options: ["pip install pandas", "install!", "!pip install pandas", "%pandas"],
        correctAnswer: "!pip install pandas",
        explanation: "The correct answer is !pip install pandas"
    },
    {
        id: 209,
        question: "What does s.describe() give?",
        options: ["Summary statistics", "Only max", "Names", "Only count"],
        correctAnswer: "Summary statistics",
        explanation: "The correct answer is Summary statistics"
    },
    {
        id: 48,
        question: "df[df[\"Age\"] > 20] returns",
        options: ["Age column", "Rows where Age is greater than 20", "Columns where Age is 20", "Error"],
        correctAnswer: "Rows where Age is greater than 20",
        explanation: "The correct answer is Rows where Age is greater than 20"
    },
    {
        id: 116,
        question: "Which attribute lists column data types?",
        options: ["types()", "schema", "dtypes", "kind"],
        correctAnswer: "dtypes",
        explanation: "The correct answer is dtypes"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 61,
        question: "Pandas works well with",
        options: ["Only Excel", "Only SQL", "Nothing else", "NumPy and Matplotlib"],
        correctAnswer: "NumPy and Matplotlib",
        explanation: "The correct answer is NumPy and Matplotlib"
    },
    {
        id: 79,
        question: "df.rename(columns={\"Name\":\"Student_Name\"}) does what?",
        options: ["Sorts", "Renames index", "Deletes Name", "Renames column Name"],
        correctAnswer: "Renames column Name",
        explanation: "The correct answer is Renames column Name"
    },
    {
        id: 150,
        question: "For the same df, df[\"Age\"].min() is",
        options: ["20", "21", "19", "22"],
        correctAnswer: "19",
        explanation: "The correct answer is 19"
    },
    {
        id: 261,
        question: "What does df.fillna(method=\"ffill\") do (forward fill)?",
        options: ["Fills with previous valid value", "Fills with mean", "Drops rows", "Fills with zero"],
        correctAnswer: "Fills with previous valid value",
        explanation: "The correct answer is Fills with previous valid value"
    },
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 213,
        question: "What does df.drop_duplicates() do?",
        options: ["Sorts rows", "Removes columns", "Removes duplicate rows", "Removes missing values"],
        correctAnswer: "Removes duplicate rows",
        explanation: "The correct answer is Removes duplicate rows"
    },
    {
        id: 248,
        question: "Output of pd.Series([10,20,30]).shape?",
        options: ["(1,3)", "(3,)", "3", "(3,1)"],
        correctAnswer: "(3,)",
        explanation: "The correct answer is (3,)"
    },
    {
        id: 242,
        question: "What is the output of pd.Series([5,1,9]).max()?",
        options: ["1", "5", "9", "15"],
        correctAnswer: "9",
        explanation: "The correct answer is 9"
    },
    {
        id: 125,
        question: "Which method sorts by values?",
        options: ["sort_values()", "sorted_by()", "order()", "arrange()"],
        correctAnswer: "sort_values()",
        explanation: "The correct answer is sort_values()"
    },
    {
        id: 234,
        question: "Which Pandas feature helps in cleaning data?",
        options: ["dropna() and fillna()", "plot3d()", "hostname()", "compile()"],
        correctAnswer: "dropna() and fillna()",
        explanation: "The correct answer is dropna() and fillna()"
    },
    {
        id: 75,
        question: "df.isnull().sum() gives",
        options: ["Missing values count per column", "Total rows", "Mean", "Column dtypes"],
        correctAnswer: "Missing values count per column",
        explanation: "The correct answer is Missing values count per column"
    },
    {
        id: 197,
        question: "Which is a valid way to create dates?",
        options: ["pd.day(\"2026-08-25\")", "pd.date(\"2026-08-25\")", "pd.to_datetime(\"2026-08-25\")", "pd.time_str(\"2026\")"],
        correctAnswer: "pd.to_datetime(\"2026-08-25\")",
        explanation: "The correct answer is pd.to_datetime(\"2026-08-25\")"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 70,
        question: "pd.read_sql() is used to",
        options: ["Read data from a SQL database", "Delete a table", "Write a SQL query file", "Create index"],
        correctAnswer: "Read data from a SQL database",
        explanation: "The correct answer is Read data from a SQL database"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 142,
        question: "In the same df, df[df[\"A\"] > 1] returns",
        options: ["Row with A=2", "Both rows", "Row with A=1", "No rows"],
        correctAnswer: "Row with A=2",
        explanation: "The correct answer is Row with A=2"
    },
    {
        id: 175,
        question: "df[\"Marks\"].count() counts",
        options: ["Unique values", "All rows including null", "Non-null values", "Only nulls"],
        correctAnswer: "Non-null values",
        explanation: "The correct answer is Non-null values"
    },
    {
        id: 260,
        question: "What does df.dropna(axis=1) drop?",
        options: ["Columns with missing values", "Everything", "Nothing", "Rows with missing values"],
        correctAnswer: "Columns with missing values",
        explanation: "The correct answer is Columns with missing values"
    },
    {
        id: 2,
        question: "Pandas is a library for which language?",
        options: ["Java", "Ruby", "Python", "C++"],
        correctAnswer: "Python",
        explanation: "The correct answer is Python"
    },
    {
        id: 145,
        question: "In the same df, len(df) is",
        options: ["3", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 153,
        question: "For the same df, df.sort_values(\"Marks\", ascending=False).iloc[0][\"Name\"] is",
        options: ["B", "A", "D", "C"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 251,
        question: "Why is DataFrame.append() discouraged/removed in newer Pandas?",
        options: ["It is faster", "It is for Series only", "It never existed", "It was removed; pd.concat() is used instead"],
        correctAnswer: "It was removed; pd.concat() is used instead",
        explanation: "The correct answer is It was removed; pd.concat() is used instead"
    },
    {
        id: 77,
        question: "df.fillna(0) replaces missing values with",
        options: ["Median", "Mode", "Mean", "0"],
        correctAnswer: "0",
        explanation: "The correct answer is 0"
    },
    {
        id: 229,
        question: "What does df[\"Name\"].str.contains(\"A\") return?",
        options: ["String", "List", "Boolean Series", "Count"],
        correctAnswer: "Boolean Series",
        explanation: "The correct answer is Boolean Series"
    },
  ],
  set18: [
    {
        id: 276,
        question: "What does reset_index() often do after groupby?",
        options: ["Sorts groups", "Deletes groups", "Removes data", "Converts group labels back to a column"],
        correctAnswer: "Converts group labels back to a column",
        explanation: "The correct answer is Converts group labels back to a column"
    },
    {
        id: 248,
        question: "Output of pd.Series([10,20,30]).shape?",
        options: ["(1,3)", "(3,)", "3", "(3,1)"],
        correctAnswer: "(3,)",
        explanation: "The correct answer is (3,)"
    },
    {
        id: 177,
        question: "Which is true about loc?",
        options: ["It only works on columns", "It is position-based", "It is label-based and slice end is inclusive", "It excludes the end label"],
        correctAnswer: "It is label-based and slice end is inclusive",
        explanation: "The correct answer is It is label-based and slice end is inclusive"
    },
    {
        id: 171,
        question: "In that example the missing mark for Charlie after fillna(mean) becomes",
        options: ["75", "83.33", "0", "90"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 283,
        question: "Which is the correct way to read a CSV with no index column written by to_csv(index=False)?",
        options: ["pd.read_csv(\"file.csv\")", "pd.read_csv(\"file.csv\", index=True)", "pd.load(\"file.csv\")", "pd.csv(\"file.csv\")"],
        correctAnswer: "pd.read_csv(\"file.csv\")",
        explanation: "The correct answer is pd.read_csv(\"file.csv\")"
    },
    {
        id: 279,
        question: "What does axis=1 mean in Pandas operations?",
        options: ["Across columns (along each row)", "No axis", "Both axes", "Down the rows"],
        correctAnswer: "Across columns (along each row)",
        explanation: "The correct answer is Across columns (along each row)"
    },
    {
        id: 194,
        question: "Pivot table with index=Department, columns=Gender, aggfunc=mean produces",
        options: ["Error", "Mean salary by department and gender", "Count by gender only", "Row list"],
        correctAnswer: "Mean salary by department and gender",
        explanation: "The correct answer is Mean salary by department and gender"
    },
    {
        id: 234,
        question: "Which Pandas feature helps in cleaning data?",
        options: ["dropna() and fillna()", "plot3d()", "hostname()", "compile()"],
        correctAnswer: "dropna() and fillna()",
        explanation: "The correct answer is dropna() and fillna()"
    },
    {
        id: 165,
        question: "For the same data, total salary of IT is",
        options: ["110000", "50000", "55000", "60000"],
        correctAnswer: "110000",
        explanation: "The correct answer is 110000"
    },
    {
        id: 97,
        question: "pd.concat([df1, df2], axis=1) combines",
        options: ["Column-wise", "Row-wise", "Not at all", "By key"],
        correctAnswer: "Column-wise",
        explanation: "The correct answer is Column-wise"
    },
    {
        id: 123,
        question: "inplace=True in rename() means",
        options: ["Modify the original DataFrame", "Sort DataFrame", "Delete DataFrame", "Create a copy"],
        correctAnswer: "Modify the original DataFrame",
        explanation: "The correct answer is Modify the original DataFrame"
    },
    {
        id: 293,
        question: "What does df[\"Marks\"].between(80, 90) return?",
        options: ["Mean between 80 and 90", "Sorted values", "Boolean mask for values from 80 to 90 inclusive", "Count only"],
        correctAnswer: "Boolean mask for values from 80 to 90 inclusive",
        explanation: "The correct answer is Boolean mask for values from 80 to 90 inclusive"
    },
    {
        id: 197,
        question: "Which is a valid way to create dates?",
        options: ["pd.day(\"2026-08-25\")", "pd.date(\"2026-08-25\")", "pd.to_datetime(\"2026-08-25\")", "pd.time_str(\"2026\")"],
        correctAnswer: "pd.to_datetime(\"2026-08-25\")",
        explanation: "The correct answer is pd.to_datetime(\"2026-08-25\")"
    },
    {
        id: 120,
        question: "Which counts missing values in each column?",
        options: ["df.missing()", "df.isnull().sum()", "df.nan()", "df.count_null()"],
        correctAnswer: "df.isnull().sum()",
        explanation: "The correct answer is df.isnull().sum()"
    },
    {
        id: 211,
        question: "What does s.unique() give?",
        options: ["Distinct values", "Duplicate values", "Mean", "Count"],
        correctAnswer: "Distinct values",
        explanation: "The correct answer is Distinct values"
    },
    {
        id: 23,
        question: "For s = pd.Series([10,20,30,40,50]), s[0] returns",
        options: ["10", "20", "Error", "0"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 163,
        question: "df = pd.DataFrame({\"Department\":[\"IT\",\"IT\",\"HR\",\"HR\"],\"Salary\":[50000,60000,450 00,55000]}). Mean salary of IT is",
        options: ["50000", "60000", "55000", "110000"],
        correctAnswer: "55000",
        explanation: "The correct answer is 55000"
    },
    {
        id: 243,
        question: "What is the output of pd.Series([5,1,9]).min()?",
        options: ["1", "9", "5", "0"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 196,
        question: "For HR with M=45000, F=55000, the pivot cell (HR, M) is",
        options: ["45000", "50000", "55000", "0"],
        correctAnswer: "45000",
        explanation: "The correct answer is 45000"
    },
    {
        id: 198,
        question: "Extracting weekday name from a datetime column uses",
        options: ["dt.day_name()", "dt.weekname", "dt.name", "dt.weekday_str"],
        correctAnswer: "dt.day_name()",
        explanation: "The correct answer is dt.day_name()"
    },
    {
        id: 78,
        question: "df[\"Marks\"].fillna(df[\"Marks\"].mean()) fills NaN with",
        options: ["The column median", "The column mean", "The max", "Zero"],
        correctAnswer: "The column mean",
        explanation: "The correct answer is The column mean"
    },
    {
        id: 254,
        question: "Which expression gives students with age less than 20 OR marks greater than 80?",
        options: ["df[df[\"Age\"]<20 or df[\"Marks\"]>80]", "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]", "df[df.Age<20 || df.Marks>80]", "df[Age<20, Marks>80]"],
        correctAnswer: "df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]",
        explanation: "The correct answer is df[(df[\"Age\"]<20) | (df[\"Marks\"]>80)]"
    },
    {
        id: 19,
        question: "For s = pd.Series([10,20,30,40]), s.max() is",
        options: ["40", "100", "10", "25"],
        correctAnswer: "40",
        explanation: "The correct answer is 40"
    },
    {
        id: 65,
        question: "df.describe() commonly shows all EXCEPT",
        options: ["file size", "std", "count", "mean"],
        correctAnswer: "file size",
        explanation: "The correct answer is file size"
    },
    {
        id: 258,
        question: "To sort in place use",
        options: ["place=True", "self=True", "modify=True", "inplace=True"],
        correctAnswer: "inplace=True",
        explanation: "The correct answer is inplace=True"
    },
    {
        id: 170,
        question: "In the workflow example, Marks = [85, 90, None, 75]. Mean used by fillna is",
        options: ["83.33", "0", "84.0", "85.0"],
        correctAnswer: "83.33",
        explanation: "The correct answer is 83.33"
    },
    {
        id: 52,
        question: "df.tail() shows",
        options: ["Column dtypes", "Last 5 rows", "Summary statistics", "First 5 rows"],
        correctAnswer: "Last 5 rows",
        explanation: "The correct answer is Last 5 rows"
    },
    {
        id: 226,
        question: "What does df.isin([...]) check?",
        options: ["Null values", "Whether values are in a list", "Whether index exists", "Whether file exists"],
        correctAnswer: "Whether values are in a list",
        explanation: "The correct answer is Whether values are in a list"
    },
    {
        id: 270,
        question: "What does df[\"Marks\"].idxmax() return?",
        options: ["Column name", "Index label of the maximum Marks", "Row count", "Maximum Marks value"],
        correctAnswer: "Index label of the maximum Marks",
        explanation: "The correct answer is Index label of the maximum Marks"
    },
    {
        id: 8,
        question: "In Jupyter Notebook, Pandas can be installed using",
        options: ["pip install pandas", "install!", "!pip install pandas", "%pandas"],
        correctAnswer: "!pip install pandas",
        explanation: "The correct answer is !pip install pandas"
    },
    {
        id: 74,
        question: "df.isnull() returns",
        options: ["A list", "Column names", "A DataFrame of True/False", "The count of nulls"],
        correctAnswer: "A DataFrame of True/False",
        explanation: "The correct answer is A DataFrame of True/False"
    },
    {
        id: 210,
        question: "What does s.sort_values() do?",
        options: ["Sorts by values", "Renames", "Deletes duplicates", "Sorts by index only"],
        correctAnswer: "Sorts by values",
        explanation: "The correct answer is Sorts by values"
    },
    {
        id: 80,
        question: "Which renames all columns at once?",
        options: ["df.columns = [...]", "df.labels = [...]", "df.rename_all()", "df.names = [...]"],
        correctAnswer: "df.columns = [...]",
        explanation: "The correct answer is df.columns = [...]"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 241,
        question: "What is the output of pd.Series([2,4,6]).mean()?",
        options: ["4.0", "12", "6.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 174,
        question: "Which is the best way to count rows with null Marks?",
        options: ["df[\"Marks\"].isnull().sum()", "df.nulls", "len(df)", "df[\"Marks\"].count()"],
        correctAnswer: "df[\"Marks\"].isnull().sum()",
        explanation: "The correct answer is df[\"Marks\"].isnull().sum()"
    },
    {
        id: 204,
        question: "In a Series, what does s.values return?",
        options: ["The index labels", "The name", "The shape", "The data values"],
        correctAnswer: "The data values",
        explanation: "The correct answer is The data values"
    },
    {
        id: 42,
        question: "df.loc[0:2, [\"Name\",\"Marks\"]] returns",
        options: ["Rows labelled 0 to 2 (inclusive) for the two columns", "Rows 0 and 1 only", "Only column Name", "All columns"],
        correctAnswer: "Rows labelled 0 to 2 (inclusive) for the two columns",
        explanation: "The correct answer is Rows labelled 0 to 2 (inclusive) for the two columns"
    },
    {
        id: 169,
        question: "For the same data, how many groups does groupby(\"Department\") produce?",
        options: ["3", "2", "1", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 274,
        question: "Which groupby call gives the number of rows per group?",
        options: ["df.size(\"Department\")", "df.groupby(\"Department\").size()", "df.groupby().len", "df.groupby(\"Department\").rows"],
        correctAnswer: "df.groupby(\"Department\").size()",
        explanation: "The correct answer is df.groupby(\"Department\").size()"
    },
    {
        id: 195,
        question: "For IT with M=50000, F=60000, the pivot cell (IT, F) is",
        options: ["50000", "55000", "60000", "0"],
        correctAnswer: "60000",
        explanation: "The correct answer is 60000"
    },
    {
        id: 250,
        question: "Which method adds a new row from another DataFrame in modern Pandas?",
        options: ["df.push()", "df.insertrow()", "df.add_row()", "pd.concat()"],
        correctAnswer: "pd.concat()",
        explanation: "The correct answer is pd.concat()"
    },
    {
        id: 278,
        question: "What does axis=0 mean in Pandas operations?",
        options: ["Along both", "No axis", "Along rows (down the columns)", "Along columns"],
        correctAnswer: "Along rows (down the columns)",
        explanation: "The correct answer is Along rows (down the columns)"
    },
    {
        id: 36,
        question: "df.iloc[0] selects",
        options: ["The last row", "The row at position 0", "The column named 0", "Nothing"],
        correctAnswer: "The row at position 0",
        explanation: "The correct answer is The row at position 0"
    },
    {
        id: 121,
        question: "Which removes rows with missing values?",
        options: ["clean()", "dropna()", "deletena()", "removena()"],
        correctAnswer: "dropna()",
        explanation: "The correct answer is dropna()"
    },
    {
        id: 148,
        question: "For the same df, df[\"Marks\"].max() is",
        options: ["75", "95", "85", "90"],
        correctAnswer: "95",
        explanation: "The correct answer is 95"
    },
    {
        id: 117,
        question: "Select the single column \"Name\": ?",
        options: ["df.get[Name]", "df[\"Name\"]", "df(Name)", "df[Name]"],
        correctAnswer: "df[\"Name\"]",
        explanation: "The correct answer is df[\"Name\"]"
    },
    {
        id: 47,
        question: "df[df[\"Marks\"] > 80] returns",
        options: ["Rows where Marks are 80", "A boolean Series only", "Rows where Marks are greater than 80", "Only the Marks column"],
        correctAnswer: "Rows where Marks are greater than 80",
        explanation: "The correct answer is Rows where Marks are greater than 80"
    },
    {
        id: 223,
        question: "What does df.apply(func) do?",
        options: ["Saves", "Applies a function along an axis", "Reads", "Merges"],
        correctAnswer: "Applies a function along an axis",
        explanation: "The correct answer is Applies a function along an axis"
    },
  ],
  set19: [
    {
        id: 51,
        question: "df.head() shows",
        options: ["Shape", "Column names", "Last 5 rows", "First 5 rows"],
        correctAnswer: "First 5 rows",
        explanation: "The correct answer is First 5 rows"
    },
    {
        id: 52,
        question: "df.tail() shows",
        options: ["Column dtypes", "Last 5 rows", "Summary statistics", "First 5 rows"],
        correctAnswer: "Last 5 rows",
        explanation: "The correct answer is Last 5 rows"
    },
    {
        id: 228,
        question: "What does df[\"Name\"].str.len() return?",
        options: ["Dtype", "Column count", "Number of rows", "Length of each string"],
        correctAnswer: "Length of each string",
        explanation: "The correct answer is Length of each string"
    },
    {
        id: 86,
        question: "The ~ operator in Pandas filtering means",
        options: ["AND", "NOT", "Add", "OR"],
        correctAnswer: "NOT",
        explanation: "The correct answer is NOT"
    },
    {
        id: 154,
        question: "For the same df, df[\"Marks\"].min() is",
        options: ["75", "85", "95", "90"],
        correctAnswer: "75",
        explanation: "The correct answer is 75"
    },
    {
        id: 15,
        question: "s = pd.Series([85,90,78], index=[\"Alice\",\"Bob\",\"Charlie\"]). What is s[\"Bob\"]?",
        options: ["Error", "78", "90", "85"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 24,
        question: "The dtype of pd.Series([10,20,30]) is",
        options: ["int64", "float64", "bool", "object"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 167,
        question: "For the same data, min salary of IT is",
        options: ["45000", "50000", "60000", "55000"],
        correctAnswer: "50000",
        explanation: "The correct answer is 50000"
    },
    {
        id: 29,
        question: "To name columns when creating a DataFrame from a list of lists, use the argument",
        options: ["names", "labels", "cols", "columns"],
        correctAnswer: "columns",
        explanation: "The correct answer is columns"
    },
    {
        id: 151,
        question: "For the same df, df[df[\"Age\"] > 20][\"Name\"] returns",
        options: ["B and D", "C only", "A and B", "A and C"],
        correctAnswer: "B and D",
        explanation: "The correct answer is B and D"
    },
    {
        id: 184,
        question: "merge with how=\"left\" keeps",
        options: ["All rows from the right DataFrame", "Only matching rows", "No rows", "All rows from the left DataFrame"],
        correctAnswer: "All rows from the left DataFrame",
        explanation: "The correct answer is All rows from the left DataFrame"
    },
    {
        id: 192,
        question: "Which function summarizes data by categories in 2D table form?",
        options: ["pivot_table", "astype", "describe", "rename"],
        correctAnswer: "pivot_table",
        explanation: "The correct answer is pivot_table"
    },
    {
        id: 221,
        question: "What does df.reset_index(drop=True) do?",
        options: ["Sorts index", "Resets the index to 0..n-1 and drops the old one", "Renames columns", "Deletes data"],
        correctAnswer: "Resets the index to 0..n-1 and drops the old one",
        explanation: "The correct answer is Resets the index to 0..n-1 and drops the old one"
    },
    {
        id: 75,
        question: "df.isnull().sum() gives",
        options: ["Missing values count per column", "Total rows", "Mean", "Column dtypes"],
        correctAnswer: "Missing values count per column",
        explanation: "The correct answer is Missing values count per column"
    },
    {
        id: 126,
        question: "Which method divides data into groups?",
        options: ["groupby()", "split()", "divide()", "cluster()"],
        correctAnswer: "groupby()",
        explanation: "The correct answer is groupby()"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 211,
        question: "What does s.unique() give?",
        options: ["Distinct values", "Duplicate values", "Mean", "Count"],
        correctAnswer: "Distinct values",
        explanation: "The correct answer is Distinct values"
    },
    {
        id: 290,
        question: "Which Pandas object is built on NumPy arrays?",
        options: ["Only SQL tables", "Series and DataFrame columns", "Only Excel files", "Only plots"],
        correctAnswer: "Series and DataFrame columns",
        explanation: "The correct answer is Series and DataFrame columns"
    },
    {
        id: 93,
        question: ".agg([\"mean\",\"min\",\"max\"]) after groupby returns",
        options: ["Multiple aggregations", "An error", "Only mean", "Only max"],
        correctAnswer: "Multiple aggregations",
        explanation: "The correct answer is Multiple aggregations"
    },
    {
        id: 88,
        question: "Why use & instead of \"and\" in filters?",
        options: ["No reason", "& works element-wise on Series", "\"and\" is faster", "& is shorter"],
        correctAnswer: "& works element-wise on Series",
        explanation: "The correct answer is & works element-wise on Series"
    },
    {
        id: 90,
        question: "Which is an aggregation function?",
        options: ["head()", "rename()", "mean()", "read_csv()"],
        correctAnswer: "mean()",
        explanation: "The correct answer is mean()"
    },
    {
        id: 41,
        question: "df.iloc[0:3] returns the",
        options: ["Last three rows", "Rows 1 to 3 inclusive of row 3 by label", "First three rows", "First three columns"],
        correctAnswer: "First three rows",
        explanation: "The correct answer is First three rows"
    },
    {
        id: 196,
        question: "For HR with M=45000, F=55000, the pivot cell (HR, M) is",
        options: ["45000", "50000", "55000", "0"],
        correctAnswer: "45000",
        explanation: "The correct answer is 45000"
    },
    {
        id: 124,
        question: "Which method changes the data type of a column?",
        options: ["convert()", "changetype()", "astype()", "cast_to()"],
        correctAnswer: "astype()",
        explanation: "The correct answer is astype()"
    },
    {
        id: 255,
        question: "Which operator is used for NOT in Pandas boolean masks?",
        options: ["not", "~", "^^", "!"],
        correctAnswer: "~",
        explanation: "The correct answer is ~"
    },
    {
        id: 74,
        question: "df.isnull() returns",
        options: ["A list", "Column names", "A DataFrame of True/False", "The count of nulls"],
        correctAnswer: "A DataFrame of True/False",
        explanation: "The correct answer is A DataFrame of True/False"
    },
    {
        id: 119,
        question: "Which is a position-based selector?",
        options: ["loc", "find", "label", "iloc"],
        correctAnswer: "iloc",
        explanation: "The correct answer is iloc"
    },
    {
        id: 237,
        question: "Which is an exam-style definition of DataFrame?",
        options: ["A one-dimensional array", "A two-dimensional labeled data structure with rows and columns", "A plotting library", "A Python loop"],
        correctAnswer: "A two-dimensional labeled data structure with rows and columns",
        explanation: "The correct answer is A two-dimensional labeled data structure with rows and columns"
    },
    {
        id: 131,
        question: "Series s + 10 does what?",
        options: ["Error", "Appends 10", "Adds 10 to the index", "Adds 10 to every element"],
        correctAnswer: "Adds 10 to every element",
        explanation: "The correct answer is Adds 10 to every element"
    },
    {
        id: 236,
        question: "Which method gives the column names of df as a list-like?",
        options: ["df.keys_only", "df.labels", "df.columns", "df.names()"],
        correctAnswer: "df.columns",
        explanation: "The correct answer is df.columns"
    },
    {
        id: 5,
        question: "A DataFrame is",
        options: ["Only a list of strings", "A plotting tool", "Two-dimensional tabular data", "One-dimensional"],
        correctAnswer: "Two-dimensional tabular data",
        explanation: "The correct answer is Two-dimensional tabular data"
    },
    {
        id: 239,
        question: "Which of the following creates a Series with a custom index?",
        options: ["pd.Series(index=[1,2,3])", "pd.Series([1,2,3], labels=[\"a\",\"b\",\"c\"])", "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])", "pd.Series.index([\"a\"])"],
        correctAnswer: "pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])",
        explanation: "The correct answer is pd.Series([1,2,3], index=[\"a\",\"b\",\"c\"])"
    },
    {
        id: 148,
        question: "For the same df, df[\"Marks\"].max() is",
        options: ["75", "95", "85", "90"],
        correctAnswer: "95",
        explanation: "The correct answer is 95"
    },
    {
        id: 280,
        question: "Which pivot_table parameter lists the numeric column to summarize?",
        options: ["target", "data_col", "values", "numbers"],
        correctAnswer: "values",
        explanation: "The correct answer is values"
    },
    {
        id: 81,
        question: "df[\"Age\"].astype(float) converts Age to",
        options: ["int", "float", "bool", "string"],
        correctAnswer: "float",
        explanation: "The correct answer is float"
    },
    {
        id: 38,
        question: "df.loc selects data using",
        options: ["Boolean only", "Integer positions only", "Random order", "Labels"],
        correctAnswer: "Labels",
        explanation: "The correct answer is Labels"
    },
    {
        id: 227,
        question: "What does df[\"Name\"].str.upper() do?",
        options: ["Sorts names", "Converts strings to uppercase", "Drops names", "Converts to numbers"],
        correctAnswer: "Converts strings to uppercase",
        explanation: "The correct answer is Converts strings to uppercase"
    },
    {
        id: 177,
        question: "Which is true about loc?",
        options: ["It only works on columns", "It is position-based", "It is label-based and slice end is inclusive", "It excludes the end label"],
        correctAnswer: "It is label-based and slice end is inclusive",
        explanation: "The correct answer is It is label-based and slice end is inclusive"
    },
    {
        id: 218,
        question: "What does df.nunique() return?",
        options: ["Shape", "Number of unique values per column", "Rows count", "Number of nulls"],
        correctAnswer: "Number of unique values per column",
        explanation: "The correct answer is Number of unique values per column"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 234,
        question: "Which Pandas feature helps in cleaning data?",
        options: ["dropna() and fillna()", "plot3d()", "hostname()", "compile()"],
        correctAnswer: "dropna() and fillna()",
        explanation: "The correct answer is dropna() and fillna()"
    },
    {
        id: 155,
        question: "For the same df, df[(df[\"Age\"] > 19) & (df[\"Marks\"] > 90)][\"Name\"] is",
        options: ["B", "C", "D", "A"],
        correctAnswer: "D",
        explanation: "The correct answer is D"
    },
    {
        id: 102,
        question: "In pivot_table, the index parameter defines",
        options: ["The row grouping", "The file", "The column grouping", "The function"],
        correctAnswer: "The row grouping",
        explanation: "The correct answer is The row grouping"
    },
    {
        id: 197,
        question: "Which is a valid way to create dates?",
        options: ["pd.day(\"2026-08-25\")", "pd.date(\"2026-08-25\")", "pd.to_datetime(\"2026-08-25\")", "pd.time_str(\"2026\")"],
        correctAnswer: "pd.to_datetime(\"2026-08-25\")",
        explanation: "The correct answer is pd.to_datetime(\"2026-08-25\")"
    },
    {
        id: 248,
        question: "Output of pd.Series([10,20,30]).shape?",
        options: ["(1,3)", "(3,)", "3", "(3,1)"],
        correctAnswer: "(3,)",
        explanation: "The correct answer is (3,)"
    },
    {
        id: 55,
        question: "df.info() shows",
        options: ["Only mean", "DataFrame information such as non-null counts and dtypes", "Only first rows", "Only shape"],
        correctAnswer: "DataFrame information such as non-null counts and dtypes",
        explanation: "The correct answer is DataFrame information such as non-null counts and dtypes"
    },
    {
        id: 122,
        question: "Which replaces missing values?",
        options: ["fillna()", "replacena()", "setna()", "putna()"],
        correctAnswer: "fillna()",
        explanation: "The correct answer is fillna()"
    },
    {
        id: 293,
        question: "What does df[\"Marks\"].between(80, 90) return?",
        options: ["Mean between 80 and 90", "Sorted values", "Boolean mask for values from 80 to 90 inclusive", "Count only"],
        correctAnswer: "Boolean mask for values from 80 to 90 inclusive",
        explanation: "The correct answer is Boolean mask for values from 80 to 90 inclusive"
    },
    {
        id: 295,
        question: "What does df[\"Name\"].tolist() return?",
        options: ["A DataFrame", "Values as a Python list", "A Series", "A tuple always"],
        correctAnswer: "Values as a Python list",
        explanation: "The correct answer is Values as a Python list"
    },
    {
        id: 152,
        question: "For the same df, df[\"Marks\"].sum() is",
        options: ["85", "350", "340", "345"],
        correctAnswer: "345",
        explanation: "The correct answer is 345"
    },
  ],
  set20: [
    {
        id: 152,
        question: "For the same df, df[\"Marks\"].sum() is",
        options: ["85", "350", "340", "345"],
        correctAnswer: "345",
        explanation: "The correct answer is 345"
    },
    {
        id: 12,
        question: "The default index of a Series is",
        options: ["Random numbers", "Integers starting from 0", "Letters", "Integers starting from 1"],
        correctAnswer: "Integers starting from 0",
        explanation: "The correct answer is Integers starting from 0"
    },
    {
        id: 203,
        question: "In a Series, what does s.index return?",
        options: ["The mean", "The labels", "The values", "The dtype"],
        correctAnswer: "The labels",
        explanation: "The correct answer is The labels"
    },
    {
        id: 141,
        question: "In the same df, df[\"A\"] * 2 gives",
        options: ["1, 2", "3, 4", "2, 4", "2, 3"],
        correctAnswer: "2, 4",
        explanation: "The correct answer is 2, 4"
    },
    {
        id: 5,
        question: "A DataFrame is",
        options: ["Only a list of strings", "A plotting tool", "Two-dimensional tabular data", "One-dimensional"],
        correctAnswer: "Two-dimensional tabular data",
        explanation: "The correct answer is Two-dimensional tabular data"
    },
    {
        id: 290,
        question: "Which Pandas object is built on NumPy arrays?",
        options: ["Only SQL tables", "Series and DataFrame columns", "Only Excel files", "Only plots"],
        correctAnswer: "Series and DataFrame columns",
        explanation: "The correct answer is Series and DataFrame columns"
    },
    {
        id: 26,
        question: "In a DataFrame, the labels on the left (0,1,2) are called",
        options: ["Headers", "Index / row labels", "Column names", "dtypes"],
        correctAnswer: "Index / row labels",
        explanation: "The correct answer is Index / row labels"
    },
    {
        id: 255,
        question: "Which operator is used for NOT in Pandas boolean masks?",
        options: ["not", "~", "^^", "!"],
        correctAnswer: "~",
        explanation: "The correct answer is ~"
    },
    {
        id: 147,
        question: "Given df = pd.DataFrame({\"Name\":[\"A\",\"B\",\"C\",\"D\"],\"Age\":[20,21,19,22],\"Marks\":[85,90,75,95]}), df[\"Marks\"].mean() is",
        options: ["345", "86.25", "85", "90"],
        correctAnswer: "86.25",
        explanation: "The correct answer is 86.25"
    },
    {
        id: 118,
        question: "Which is a label-based selector?",
        options: ["loc", "index_of", "iloc", "at_pos"],
        correctAnswer: "loc",
        explanation: "The correct answer is loc"
    },
    {
        id: 181,
        question: "Which method returns first n rows?",
        options: ["start(n)", "head(n)", "top(n)", "first_rows(n)"],
        correctAnswer: "head(n)",
        explanation: "The correct answer is head(n)"
    },
    {
        id: 113,
        question: "Which function reads a CSV file?",
        options: ["pd.open_csv()", "pd.csv_read()", "pd.read_csv()", "pd.load_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "The correct answer is pd.read_csv()"
    },
    {
        id: 98,
        question: "ignore_index=True in concat() does what?",
        options: ["Creates a new continuous index", "Drops columns", "Ignores all data", "Sorts the data"],
        correctAnswer: "Creates a new continuous index",
        explanation: "The correct answer is Creates a new continuous index"
    },
    {
        id: 129,
        question: "What does pd.Series({\"Maths\":90,\"Science\":85}) produce?",
        options: ["Index Maths, Science with values 90, 85", "Two columns", "A DataFrame", "An error"],
        correctAnswer: "Index Maths, Science with values 90, 85",
        explanation: "The correct answer is Index Maths, Science with values 90, 85"
    },
    {
        id: 71,
        question: "df.to_excel(\"output.xlsx\", index=False) saves",
        options: ["To JSON", "To CSV", "To Excel without index", "To SQL"],
        correctAnswer: "To Excel without index",
        explanation: "The correct answer is To Excel without index"
    },
    {
        id: 50,
        question: "To sort in descending order, use",
        options: ["reverse=False", "order=\"desc\"", "descending=True", "ascending=False"],
        correctAnswer: "ascending=False",
        explanation: "The correct answer is ascending=False"
    },
    {
        id: 21,
        question: "If s1 = [10,20,30] and s2 = [5,10,15] are Series, s1 + s2 gives",
        options: ["105, 2010, 3015", "Error", "15, 30, 45", "5, 10, 15"],
        correctAnswer: "15, 30, 45",
        explanation: "The correct answer is 15, 30, 45"
    },
    {
        id: 159,
        question: "For the same df, df.loc[1, \"Marks\"] is",
        options: ["90", "95", "85", "75"],
        correctAnswer: "90",
        explanation: "The correct answer is 90"
    },
    {
        id: 226,
        question: "What does df.isin([...]) check?",
        options: ["Null values", "Whether values are in a list", "Whether index exists", "Whether file exists"],
        correctAnswer: "Whether values are in a list",
        explanation: "The correct answer is Whether values are in a list"
    },
    {
        id: 18,
        question: "For s = pd.Series([10,20,30,40]), s.mean() is",
        options: ["25.0", "100", "30.0", "20.0"],
        correctAnswer: "25.0",
        explanation: "The correct answer is 25.0"
    },
    {
        id: 297,
        question: "What does df.head(0) return?",
        options: ["Error", "The whole df", "An empty DataFrame with columns", "The first row"],
        correctAnswer: "An empty DataFrame with columns",
        explanation: "The correct answer is An empty DataFrame with columns"
    },
    {
        id: 187,
        question: "merge with how=\"inner\" keeps",
        options: ["Only right rows", "All rows", "Only matching rows", "Only left rows"],
        correctAnswer: "Only matching rows",
        explanation: "The correct answer is Only matching rows"
    },
    {
        id: 68,
        question: "pd.read_excel(\"students.xlsx\") reads",
        options: ["A SQL database", "A JSON file", "An Excel file", "A CSV file"],
        correctAnswer: "An Excel file",
        explanation: "The correct answer is An Excel file"
    },
    {
        id: 47,
        question: "df[df[\"Marks\"] > 80] returns",
        options: ["Rows where Marks are 80", "A boolean Series only", "Rows where Marks are greater than 80", "Only the Marks column"],
        correctAnswer: "Rows where Marks are greater than 80",
        explanation: "The correct answer is Rows where Marks are greater than 80"
    },
    {
        id: 168,
        question: "For the same data, df.groupby(\"Department\").size() gives IT =",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 213,
        question: "What does df.drop_duplicates() do?",
        options: ["Sorts rows", "Removes columns", "Removes duplicate rows", "Removes missing values"],
        correctAnswer: "Removes duplicate rows",
        explanation: "The correct answer is Removes duplicate rows"
    },
    {
        id: 90,
        question: "Which is an aggregation function?",
        options: ["head()", "rename()", "mean()", "read_csv()"],
        correctAnswer: "mean()",
        explanation: "The correct answer is mean()"
    },
    {
        id: 103,
        question: "In pivot_table, the columns parameter defines",
        options: ["The index name", "The row grouping", "The values", "The column grouping"],
        correctAnswer: "The column grouping",
        explanation: "The correct answer is The column grouping"
    },
    {
        id: 277,
        question: "Which parameter of pd.concat is used to join columns side by side?",
        options: ["axis=0", "how=\"left\"", "axis=1", "on=\"ID\""],
        correctAnswer: "axis=1",
        explanation: "The correct answer is axis=1"
    },
    {
        id: 188,
        question: "Default join type in pd.merge() is",
        options: ["right", "left", "inner", "outer"],
        correctAnswer: "inner",
        explanation: "The correct answer is inner"
    },
    {
        id: 272,
        question: "What does df[\"Marks\"].rank() return?",
        options: ["Index", "Sum", "Sorted values", "Rank of each value"],
        correctAnswer: "Rank of each value",
        explanation: "The correct answer is Rank of each value"
    },
    {
        id: 257,
        question: "What does sort_values return by default?",
        options: ["Nothing", "It modifies in place", "A list", "A new sorted DataFrame"],
        correctAnswer: "A new sorted DataFrame",
        explanation: "The correct answer is A new sorted DataFrame"
    },
    {
        id: 140,
        question: "In the same df, df.loc[0,\"B\"] is",
        options: ["4", "3", "1", "2"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 85,
        question: "The pipe operator in Pandas filtering means",
        options: ["Divide", "AND", "NOT", "OR"],
        correctAnswer: "OR",
        explanation: "The correct answer is OR"
    },
    {
        id: 132,
        question: "Series arithmetic aligns on",
        options: ["Values", "Name", "Index labels", "Dtype"],
        correctAnswer: "Index labels",
        explanation: "The correct answer is Index labels"
    },
    {
        id: 247,
        question: "Output of pd.Series([10,20,30]).iloc[-1]?",
        options: ["Error", "10", "20", "30"],
        correctAnswer: "30",
        explanation: "The correct answer is 30"
    },
    {
        id: 174,
        question: "Which is the best way to count rows with null Marks?",
        options: ["df[\"Marks\"].isnull().sum()", "df.nulls", "len(df)", "df[\"Marks\"].count()"],
        correctAnswer: "df[\"Marks\"].isnull().sum()",
        explanation: "The correct answer is df[\"Marks\"].isnull().sum()"
    },
    {
        id: 59,
        question: "Why use index=False in to_csv()?",
        options: ["To zip the file", "To sort the file", "To remove NaN", "To prevent writing the index as an extra column"],
        correctAnswer: "To prevent writing the index as an extra column",
        explanation: "The correct answer is To prevent writing the index as an extra column"
    },
    {
        id: 240,
        question: "What is the output of pd.Series([1,2,3]).sum()?",
        options: ["3", "Error", "123", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 39,
        question: "df.iloc selects data using",
        options: ["Column dtype", "Integer positions", "Values", "Labels"],
        correctAnswer: "Integer positions",
        explanation: "The correct answer is Integer positions"
    },
    {
        id: 73,
        question: "Missing data in Pandas is commonly represented as",
        options: ["NaN", "Zero", "None only", "Empty string"],
        correctAnswer: "NaN",
        explanation: "The correct answer is NaN"
    },
    {
        id: 116,
        question: "Which attribute lists column data types?",
        options: ["types()", "schema", "dtypes", "kind"],
        correctAnswer: "dtypes",
        explanation: "The correct answer is dtypes"
    },
    {
        id: 204,
        question: "In a Series, what does s.values return?",
        options: ["The index labels", "The name", "The shape", "The data values"],
        correctAnswer: "The data values",
        explanation: "The correct answer is The data values"
    },
    {
        id: 286,
        question: "What does pd.read_csv(\"f.csv\", sep=\";\") specify?",
        options: ["JSON", "Semicolon-separated values", "Tab-separated", "Space-separated"],
        correctAnswer: "Semicolon-separated values",
        explanation: "The correct answer is Semicolon-separated values"
    },
    {
        id: 8,
        question: "In Jupyter Notebook, Pandas can be installed using",
        options: ["pip install pandas", "install!", "!pip install pandas", "%pandas"],
        correctAnswer: "!pip install pandas",
        explanation: "The correct answer is !pip install pandas"
    },
    {
        id: 136,
        question: "In df = pd.DataFrame({\"A\":[1,2],\"B\":[3,4]}), df.shape is",
        options: ["(4, 1)", "(1, 4)", "(2, 4)", "(2, 2)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 275,
        question: "Which is true about the groupby workflow?",
        options: ["Split, apply, combine", "Read, write, delete", "Open, close, save", "Sort, sort, sort"],
        correctAnswer: "Split, apply, combine",
        explanation: "The correct answer is Split, apply, combine"
    },
    {
        id: 64,
        question: "df.dtypes shows",
        options: ["Column count", "The data type of each column", "Shape", "Only index type"],
        correctAnswer: "The data type of each column",
        explanation: "The correct answer is The data type of each column"
    },
    {
        id: 233,
        question: "Pandas can handle data from",
        options: ["Only Excel", "CSV, Excel, JSON and SQL", "Only CSV", "Only images"],
        correctAnswer: "CSV, Excel, JSON and SQL",
        explanation: "The correct answer is CSV, Excel, JSON and SQL"
    },
    {
        id: 189,
        question: "Which is similar to SQL JOIN?",
        options: ["rename", "merge", "concat", "head"],
        correctAnswer: "merge",
        explanation: "The correct answer is merge"
    },
  ],
};
