var form_id_js = 'javascript_form';

var data_js = {
  access_token: '1fzfr321yezs3awlhcn0bab4',
};

function js_onSuccess() {
  // remove this to avoid redirect
  Swal.fire({
    icon: 'success',
    title: 'Yo..!,Got your message',
    text: 'I will get back to you soon asap.',
  });
  sendButton.value = 'Send Message';
}

function js_onError(error) {
  // remove this to avoid redirect
  Swal.fire({
    icon: 'warning',
    title: 'No..!!',
    text: 'Server is deep down somewhere please try after some time.',
  });
  sendButton.value = 'Send Message';
}

var sendButton = document.getElementById('js_send');

function js_send() {
  var name = document.querySelector('#' + form_id_js + " [name='name']").value;
  var email = document.querySelector('#' + form_id_js + " [name='email']")
    .value;
  var number = document.querySelector('#' + form_id_js + " [name='number']")
    .value;
  if (number === '' || email === '' || number === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You miss out required fields.',
    });
    return;
  }
  sendButton.value = 'Sending…';
  sendButton.disabled = true;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      js_onSuccess();
    } else if (request.readyState == 4) {
      js_onError(request.response);
    }
  };

  var subject = 'Name :' + name + '   Email:' + email + '  Number:' + number;
  var message = document.querySelector('#' + form_id_js + " [name='text']")
    .value;
  data_js['subject'] = subject;
  data_js['text'] = message;
  var params = toParams(data_js);

  request.open('POST', 'https://postmail.invotes.com/send', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  request.send(params);

  return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key])
    );
  }

  return form_data.join('&');
}
function showAlert(icon1, message) {}
var js_form = document.getElementById(form_id_js);
js_form.addEventListener('submit', function (e) {
  e.preventDefault();
});
