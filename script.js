document.addEventListener('DOMContentLoaded', function() {
  var gridContainer = document.getElementById('grid-container');
  var gridItems = document.querySelectorAll('.item');
  var blockIdInput = document.getElementById('block_id');
  var colorInput = document.getElementById('colour_id');
  var changeButton = document.getElementById('change_button');
  var resetButton = document.getElementById('reset_button');

  function resetGrid() {
    gridItems.forEach(function(item) {
      item.style.backgroundColor = 'transparent';
    });
  }

  function changeColor() {
    var blockId = blockIdInput.value;
    var color = colorInput.value;

    var blockElement = document.getElementById(blockId);
    if (blockElement) {
      resetGrid();
      blockElement.style.backgroundColor = color;
    }
  }

  changeButton.addEventListener('click', changeColor);
  resetButton.addEventListener('click', resetGrid);
});
