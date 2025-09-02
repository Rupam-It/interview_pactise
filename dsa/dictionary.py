
# | Method                         | Description                                                        | Example                                         |
# | ------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------- |
# | **`clear()`**                  | Removes all items from the dictionary                              | `d.clear()`                                     |
# | **`copy()`**                   | Returns a shallow copy of the dictionary                           | `d2 = d.copy()`                                 |
# | **`fromkeys(seq, value)`**     | Creates a dict with keys from `seq` and given value                | `dict.fromkeys([1,2,3], 0)` → `{1:0, 2:0, 3:0}` |
# | **`get(key, default)`**        | Returns value of `key`, else `default`                             | `d.get("age", 0)`                               |
# | **`items()`**                  | Returns view object of key-value pairs                             | `d.items()`                                     |
# | **`keys()`**                   | Returns view object of dictionary keys                             | `d.keys()`                                      |
# | **`pop(key, default)`**        | Removes key and returns its value, or `default` if missing         | `d.pop("age", -1)`                              |
# | **`popitem()`**                | Removes and returns **last inserted (key, value)** pair            | `d.popitem()`                                   |
# | **`setdefault(key, default)`** | Returns value if key exists, else inserts key with `default`       | `d.setdefault("city", "NY")`                    |
# | **`update([other])`**          | Updates dictionary with key-value pairs from another dict/iterable | `d.update({"a": 10})`                           |
# | **`values()`**                 | Returns view object of dictionary values                           | `d.values()`                                    |

d={
    "rupam":{
        "age":22
    },
    "pessi":{
        "age":36,
        "prefession":"footballer"
    }
}

print(d.get("rupam"))