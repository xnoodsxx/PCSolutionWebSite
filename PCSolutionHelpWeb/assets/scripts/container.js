document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.querySelector('.content-container');
  const hiddenContainer = document.querySelector('.hidden-container');
  const GPUcontentContainer = document.querySelector('.GPUcontent-container');
  const GPUhiddenContainer = document.querySelector('.GPUhidden-container');
  const RAMcontentContainer = document.querySelector('.RAMcontent-container');
  const RAMhiddenContainer = document.querySelector('.RAMhidden-container');
  const MotherboardContentContainer = document.querySelector('.MotherboardContentContainer');
  const MotherboardHiddenContainer = document.querySelector('.MotherboardHiddenContainer');
  const PSUcontentContainer = document.querySelector('.PSUcontent-container');
  const PSUhiddenContainer = document.querySelector('.PSUhidden-container');

  contentContainer.addEventListener('click', function() {
    hiddenContainer.style.display = 'block';
  });

  GPUcontentContainer.addEventListener('click', function() {
    GPUhiddenContainer.style.display = 'block';
  });

  RAMcontentContainer.addEventListener('click', function() {
    RAMhiddenContainer.style.display = 'block';
  });

  MotherboardContentContainer.addEventListener('click', function() {
    MotherboardHiddenContainer.style.display = 'block';
  });

  PSUcontentContainer.addEventListener('click', function() {
    PSUhiddenContainer.style.display = 'block';
  });

  const processorOptions = document.querySelectorAll('.processor-option');
  const cpuContainers = document.querySelectorAll('.CPUContainer');
  const gpuOptions = document.querySelectorAll('.gpu-option');
  const gpuContainers = document.querySelectorAll('.GPUContainer');
  const ramOptions = document.querySelectorAll('.ram-option');
  const ramContainers = document.querySelectorAll('.RAMContainer');
  const motherboardOptions = document.querySelectorAll('.motherboard-option');
  const motherboardContainers = document.querySelectorAll('.MotherboardContainer');
  const psuOptions = document.querySelectorAll('.psu-option');
  const psuContainers = document.querySelectorAll('.PSUContainer');

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

  gpuOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const selectedGpu = option.getAttribute('data-gpu');
      gpuContainers.forEach(function(container) {
        if (container.id === selectedGpu + 'Container') {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    });
  });

  ramOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const selectedRam = option.getAttribute('data-ram');
      ramContainers.forEach(function(container) {
        if (container.id === selectedRam + 'Container') {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    });
  });

  motherboardOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const selectedMotherboard = option.getAttribute('data-motherboard');
      motherboardContainers.forEach(function(container) {
        if (container.id === selectedMotherboard + 'Container') {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    });
  });

  psuOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const selectedPsu = option.getAttribute('data-psu');
      psuContainers.forEach(function(container) {
        if (container.id === selectedPsu + 'Container') {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    });
  });
});