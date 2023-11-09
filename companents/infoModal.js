export default function InfoModal({ name, imageUrl, description, ...rest }) {
  let modal = `<!-- The Modal -->
    <div id="myModal" class="modal">
    <!-- Modal content -->
        <div class="modal-dialog">
          <div class="modal-content">
             <div class="modal-header">
             <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
                 <h4 class="modal-title">${name}</h4>  
             </div>
             <div class="modal-body">
             <img src="${imageUrl}">
                <h3 class="pt-3">Azerbaijan</h3>
                <p>${description}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default close" data-dismiss="modal">Cancel</button>
                <button id="loadpage" type="button" class="btn bg-dark" >Save</button>
            </div>
    <!-- /.modal-dialog -->
        </div>
    </div>
    </div>`;
  const parser = new DOMParser();
  const parsed = parser.parseFromString(modal, "text/html");

  const modalNode = parsed.querySelector("#myModal");
  return modalNode;
}
