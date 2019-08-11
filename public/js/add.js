<div class="header">
        <p>Add your favorite Happy Hour spot to our database!</p>
    </div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="barName">Name of Bar</label>
          <input type="text" class="form-control" id="barName" placeholder="Enter your favorite watering hole!">
        </div>
        <div class="form-group col-md-8">
          <label for="city">City</label>
          <input type="text" class="form-control" id="newCity" placeholder="City">
        </div>
        
          <div class="form-group col-md-6">
              <label for="happyStart">Happy Hour Start</label>
            
              <input type="time" class="form-control" id="timeStart" placeholder="Happy Hour Start">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-time"></span>
              </span>
            </div>
          </div>
        
        
          <div class="form-group col-md-6">
              <label for="happyEnd">Happy Hour End</label>
           
              <input type="time" class="form-control" id="timeEnd" placeholder="Happy Hour End">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-time"></span>
              </span>
            </div>
          
        
    
        <!-- <div class="form-group col-md-7">
          <label for="location">Lat, Long</label>
          <input type="text" class="form-control" id="location" />
        </div> -->
        <div class="form-group col-md-6">
          <label for="inputPrice">Price</label>
          <select id="inputPrice" class="form-control">
            <option selected="">Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="inputRating">Rating</label>
          <select id="inputRating" class="form-control">
            <option selected="">Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      
      <button type="submit" class="btn btn-primary" id="addBar">
        Add Bar!
      </button>
    </form>