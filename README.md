easy use ajax
==================
**You can use ajax more easily on your site**

Example
-----------
You can see example of usage in [this file](https://github.com/mohammadhasananisi/easy-use-ajax/blob/master/example.html).


Installation
---------------
**Use the head tag**

```html
    <script src="jquery.js"></script>
    <script src="main.js"></script>
```
Usage
-----------------
**Paste the following code into the attributes of the html tags**

```
            <div ajax='True' ajax_url="url send" ajax_response="#div" ajax_type="POST" ajax_data="{'data_first':'True'}" id="div"  if_click='#id_click' file_element="#file_id"></div>
            <form id="myformelement" class="myformelement">
                <input type="file" name="test" id="file_id">
            </form>
            <button id="id_click" class="class_click">Button</button>
```

`ajax='True` To enable or disable Ajax‍‍
`ajax_url` Ajax posting address‍‍ Like `ajax_url="google.com"`
`ajax_response` Element for receiving the ajax response like `ajax_response='.class'`, `ajax_response='#id'`, **with attribute** `ajax_response="[name='test']"`, **with Tages** `ajax_response="div"`
`ajax_type` Submitted method Like `ajax_type="POST"`, `ajax_type="GET"`
`ajax_data` Submitted variable Like `ajax_data="{'data_first' : '1','data_second': '2' }"`
**If you want to send everything in the form** Like `form_element='#myformelement'` , `form_element='.myformelement'`, `form_element='form'`
**If you want to send the file** Like `file_element='#file_id'`, `file_element='[type="file"]'`, `file_element='[name="test"]'`

**If you want to click on a button, send an Ajax** Like `if_click='#id_click'` , `if_click='.class_click'`, `if_click='button'`
**The Ajax point is to submit a form with the FormData command in JavaScript**
**You can use this Ajax in all HTML code attributes**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Authors
-------

::

    Author <mohammadhasananisiqom@gmail.com> (Mohammad Hasan Anisi)

Please report bugs and suggestions at the `Telegram <https://t.me/mohammadhasananisi>`__!

