export default function InfoModal() {
    let modal = `<!-- The Modal -->
    <div id="myModal" class="modal">
    <!-- Modal content -->
        <div class="modal-dialog">
          <div class="modal-content">
             <div class="modal-header">
             <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                 <h4 class="modal-title">Azerbaijan</h4>  
             </div>
             <div class="modal-body">
             <img src="./img/az1.png">
                <h3 class="pt-3">Azerbaijan</h3>
                <p>Praesent non dictum dolor, vitae interdum erat. Nam quis consectetur mi. In consequat condimentum tortor, et lobortis est convallis ac. Quisque volutpat posuere dui, pellentesque vulputate dolor. Morbi dapibus orci eu est consectetur, sed pretium mauris laoreet. Pellentesque sodales ante non justo viverra, sit amet consectetur nisl vulputate.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default close" data-dismiss="modal">Cancel</button>
                <button id="loadpage" type="button" class="btn bg-dark" >Save</button>
            </div>
    <!-- /.modal-dialog -->
        </div>
    </div>
    </div>`;
    return modal;
  }
  