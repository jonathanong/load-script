'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (js) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _promise2.default(function (resolve, reject) {
    var timeout = options.timeout;

    if (typeof timeout === 'number') {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(loadScript, {
          timeout: timeout
        });
        return;
      }

      setTimeout(loadScript, timeout);
      return;
    }

    loadScript();

    function loadScript() {
      var script = document.createElement('script');
      script.onload = function () {
        return resolve(script);
      };
      script.onerror = function () {
        return reject(new Error('Failed to load script: "' + src + '"'));
      };
      if (options.type) script.type = options.type;
      if (options.charset) script.charset = options.charset;
      if (options.id) script.id = options.id;
      if (typeof options.noModule === 'boolean') script.noModule = options.noModule;
      script.async = options.async !== false;
      script.defer = options.defer !== false;
      script.src = src;
      document.head.appendChild(script);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwianMiLCJvcHRpb25zIiwicmVzb2x2ZSIsInJlamVjdCIsInRpbWVvdXQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwibG9hZFNjcmlwdCIsInNldFRpbWVvdXQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJvbmVycm9yIiwiRXJyb3IiLCJzcmMiLCJ0eXBlIiwiY2hhcnNldCIsImlkIiwibm9Nb2R1bGUiLCJhc3luYyIsImRlZmVyIiwiaGVhZCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBQSxPQUFPQyxPQUFQLEdBQWlCLFVBQUNDLEVBQUQ7QUFBQSxNQUFLQyxPQUFMLHVFQUFlLEVBQWY7QUFBQSxTQUFzQixzQkFBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFBQSxRQUM5REMsT0FEOEQsR0FDbERILE9BRGtELENBQzlERyxPQUQ4RDs7QUFFdEUsUUFBSSxPQUFPQSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFVBQUksT0FBT0MsbUJBQVAsS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0NBLDRCQUFvQkMsVUFBcEIsRUFBZ0M7QUFDOUJGO0FBRDhCLFNBQWhDO0FBR0E7QUFDRDs7QUFFREcsaUJBQVdELFVBQVgsRUFBdUJGLE9BQXZCO0FBQ0E7QUFDRDs7QUFFREU7O0FBRUEsYUFBU0EsVUFBVCxHQUF1QjtBQUNyQixVQUFNRSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsYUFBT0csTUFBUCxHQUFnQjtBQUFBLGVBQU1ULFFBQVFNLE1BQVIsQ0FBTjtBQUFBLE9BQWhCO0FBQ0FBLGFBQU9JLE9BQVAsR0FBaUI7QUFBQSxlQUFNVCxPQUFPLElBQUlVLEtBQUosOEJBQXFDQyxHQUFyQyxPQUFQLENBQU47QUFBQSxPQUFqQjtBQUNBLFVBQUliLFFBQVFjLElBQVosRUFBa0JQLE9BQU9PLElBQVAsR0FBY2QsUUFBUWMsSUFBdEI7QUFDbEIsVUFBSWQsUUFBUWUsT0FBWixFQUFxQlIsT0FBT1EsT0FBUCxHQUFpQmYsUUFBUWUsT0FBekI7QUFDckIsVUFBSWYsUUFBUWdCLEVBQVosRUFBZ0JULE9BQU9TLEVBQVAsR0FBWWhCLFFBQVFnQixFQUFwQjtBQUNoQixVQUFJLE9BQU9oQixRQUFRaUIsUUFBZixLQUE0QixTQUFoQyxFQUEyQ1YsT0FBT1UsUUFBUCxHQUFrQmpCLFFBQVFpQixRQUExQjtBQUMzQ1YsYUFBT1csS0FBUCxHQUFlbEIsUUFBUWtCLEtBQVIsS0FBa0IsS0FBakM7QUFDQVgsYUFBT1ksS0FBUCxHQUFlbkIsUUFBUW1CLEtBQVIsS0FBa0IsS0FBakM7QUFDQVosYUFBT00sR0FBUCxHQUFhQSxHQUFiO0FBQ0FMLGVBQVNZLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmQsTUFBMUI7QUFDRDtBQUNGLEdBN0JzQyxDQUF0QjtBQUFBLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IChqcywgb3B0aW9ucyA9IHt9KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHsgdGltZW91dCB9ID0gb3B0aW9uc1xuICBpZiAodHlwZW9mIHRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGxvYWRTY3JpcHQsIHtcbiAgICAgICAgdGltZW91dFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFRpbWVvdXQobG9hZFNjcmlwdCwgdGltZW91dClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxvYWRTY3JpcHQoKVxuXG4gIGZ1bmN0aW9uIGxvYWRTY3JpcHQgKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiBcIiR7c3JjfVwiYCkpXG4gICAgaWYgKG9wdGlvbnMudHlwZSkgc2NyaXB0LnR5cGUgPSBvcHRpb25zLnR5cGVcbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0KSBzY3JpcHQuY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldFxuICAgIGlmIChvcHRpb25zLmlkKSBzY3JpcHQuaWQgPSBvcHRpb25zLmlkXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm5vTW9kdWxlID09PSAnYm9vbGVhbicpIHNjcmlwdC5ub01vZHVsZSA9IG9wdGlvbnMubm9Nb2R1bGVcbiAgICBzY3JpcHQuYXN5bmMgPSBvcHRpb25zLmFzeW5jICE9PSBmYWxzZVxuICAgIHNjcmlwdC5kZWZlciA9IG9wdGlvbnMuZGVmZXIgIT09IGZhbHNlXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9XG59KVxuIl19