self.addEventListener('message', function (e) {
   var data = e.data;
   console.log(self);
   let sum = 0
   switch (data.cmd) {
      case 'average':
         data.data.forEach(element => {
            sum = sum + Number(element)
         });
         var result = sum; // Функция, вычисляющая среднее значение числового массива
         self.postMessage(result);
         break;
      default:
         self.postMessage('Unknown command');
   }
}, false);