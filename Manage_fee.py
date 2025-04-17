import json
import os

FILE_NAME = 'fee.json'

def load_data():
    if not os.path.exists(FILE_NAME):
        return {}
    with open(FILE_NAME, 'r') as file:
        try:
            return json.load(file)
        except json.JSONDecodeError:
            print("Warning: JSON file is empty or corrupted. Starting fresh.")
            return {}

def save_data(data):
    with open(FILE_NAME, 'w') as file:
        json.dump(data, file, indent=2)
    print("\n✅ Data saved successfully!")

def get_input(prompt, cast_type=str):
    while True:
        try:
            return cast_type(input(prompt))
        except ValueError:
            print(f"Invalid input! Please enter a valid {cast_type.__name__}.")

def add_or_update_student(data):
    print("\n--- Enter Student Fee Details ---")
    receipt = input("Receipt Number (e.g., 2025-004): ").strip()

    name = input("Student Name: ").strip()
    roll = input("Roll Number: ").strip()
    course = input("Course Name: ").strip()
    batch = input("Batch Time (e.g., 10:00 AM - 12:00 PM): ").strip()
    total = get_input("Total Fee: ", int)
    remaining = get_input("Remaining Fee: ", int)

    data[receipt] = {
        "name": name,
        "roll": roll,
        "course": course,
        "batch": batch,
        "total": total,
        "remaining": remaining
    }

    print(f"\nData {'updated' if receipt in data else 'added'} for receipt number: {receipt}")
    return data

def main():
    print("===== Student Fee Manager =====")
    data = load_data()
    
    while True:
        data = add_or_update_student(data)
        save_data(data)
        
        cont = input("\nDo you want to add/update another student? (y/n): ").strip().lower()
        if cont != 'y':
            print("Exiting... nikal!")
            break

if __name__ == '__main__':
    main()
