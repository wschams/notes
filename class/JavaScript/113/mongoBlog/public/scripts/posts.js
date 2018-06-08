(function () {
    const addCommentUI = $(`
        <div>
            <textarea id="addCommentContent"></textarea>
            <button id="addComment">add</button>
            <button id="cancelComment">cancel</button>
        </div>
    `),
    addCommentContent = addCommentUI.find('#addCommentContent');

    function hideAddCommentUI() {
        // if we bind events to ui use hide and show instead of remove
        addCommentUI.remove();
    }

    $('body').click(e => {
        const target = $(e.target);
        if(target.hasClass('addComment')) {
            target.after(addCommentUI);
        }
    });

    //$('#addComment').click(() => {
    $(document).on('click', '#addComment', e => {
        $.post('new-comment', {
            id: $(e.target).closest('.post').attr('id'),
            content: addCommentContent.val()
        });
        hideAddCommentUI();
    });

    //$('#cancelComment').click(() => {
    $(document).on('click', '#cancelComment', () => {
        hideAddCommentUI();
    });
}());