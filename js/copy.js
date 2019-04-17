    clipboard = new ClipboardJS('[data-clipboard-target]');
    $(function () {
        $('[data-tooltip="tooltip"]').tooltip()
    });

    /** from //github.com/twbs/bootstrap/blob/c11132351e3e434f6d4ed72e5a418eb692c6a319/assets/js/src/application.js */
    clipboard.on('success', function (e) {
        $(e.trigger)
            .attr('title', 'Copied!')
            .tooltip('_fixTitle')
            .tooltip('show')
            .tooltip('_fixTitle');
        e.clearSelection();
    });
