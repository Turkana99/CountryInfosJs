export default function PageContent(){
  let pageContent = `   <div class="input-group px-5">
<input type="text" class="form-control" placeholder="Search country">
<div class="input-group-append">
  <button class="btn bg-dark" type="button">
    <i class="fa fa-search"></i>
  </button>
</div>
</div>
<div class="cards px-5 pt-5">
        <div class="card card1 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/980221/pexels-photo-980221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 1">
            </div>
            <div class="noi-dung">
                <h3>Azerbaijan</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn btn1" type="button"  data-toggle="modal" data-target="#exampleModal" id="myBtn">More Info</button>
            </div>
        </div>

        <div class="card card2 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/2067048/pexels-photo-2067048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 2">
            </div>
            <div class="noi-dung">
                <h3>Norway</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn2">More Info</button>
            </div>
        </div>

        <div class="card card3 bg-dark">
            <div class="container">
                <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Ảnh 3">
            </div>
            <div class="noi-dung">
                <h3>Singapore</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit neque illum nostrum. Quod obcaecati quasi temporibus asperiores similique illum consequatur animi, unde dolores perspiciatis? Aliquam exercitationem obcaecati explicabo voluptates?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="btn3">More Info</button>
            </div>
        </div>
    </div>`;
    return pageContent;
}



