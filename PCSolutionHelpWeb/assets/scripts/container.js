function handleClick(element) {
    const option = element.textContent;
    const container = element.parentNode.parentNode;
  
    console.log(option);
  
    const allOptions = container.querySelectorAll('.listcontainer li a');
    allOptions.forEach(function(btn) {
      btn.classList.remove('active');
    });
    element.classList.add('active');
  
    const allListItems = container.querySelectorAll('.listcontainer li');
    allListItems.forEach(function(item) {
      item.classList.remove('checked');
    });
    element.parentNode.classList.add('checked');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.querySelector('.content-container');
    const hiddenContainer = document.querySelector('.hidden-container');
    const GPUcontentContainer = document.querySelector('.GPUcontent-container');
    const GPUhiddenContainer = document.querySelector('.GPUhidden-container');
    contentContainer.addEventListener('click', function() {
      hiddenContainer.style.display = 'block';
    });
    GPUcontentContainer.addEventListener('click', function() {
      GPUhiddenContainer.style.display = 'block';
    });
    const processorOptions = document.querySelectorAll('.processor-option');
    const cpuContainers = document.querySelectorAll('.CPUContainer');
    processorOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        const selectedProcessor = option.getAttribute('data-processor');
        cpuContainers.forEach(function(container) {
          if (container.id === selectedProcessor + 'Container') {
            container.classList.add('active');
          } else {
            container.classList.remove('active');
          }
        });
      });
    });
    const gpuOptions = document.querySelectorAll('.gpu-option');
    const gpuContainers = document.querySelectorAll('.GPUContainer');
    gpuOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        const selectedgpu = option.getAttribute('data-gpu');
        gpuContainers.forEach(function(container) {
          if (container.id === selectedgpu + 'Container') {
            container.classList.add('active');
          } else {
            container.classList.remove('active');
          }
        });
      });
    });
  });