// 전체 코멘트를 담고 있는 배열
var comments_list = [
    {
        idx: "admin1",
        comment: "댓글 기능 구현 예제 댓글 1번",
        recommend: 1,
    },
    {
        idx: "admin2",
        comment: "댓글 기능 구현 예제 댓글 2번",
        recommend: 10,
    },
    {
        idx: "admin3",
        comment: "댓글 기능 구현 예제 댓글 3번",
        recommend: 23,
    },
    {
        idx: "admin4",
        comment: "댓글 기능 구현 예제 댓글 4번",
        recommend: 0,
    },
    {
        idx: "admin5",
        comment: "댓글 기능 구현 예제 댓글 5번",
        recommend: 2123,
    },
];

// id="cbox_destination"에 HTMLElement추가
function addElementInCommentArea(comment_list_idx, appending) {
    if (appending == 1) {
        $("#cbox_destination").append("<li><textarea rows='4'>" + comments_list[comment_list_idx].comment + "</textarea>" + '<input class="btn_comment_recomm" type="button" value=' + String(comments_list[comment_list_idx].recommend) + ' name="' + comments_list[comment_list_idx].idx + '"></li>');
    } else {
        $("#cbox_destination").prepend("<li><textarea rows='4'>" + comments_list[comment_list_idx].comment + "</textarea>" + '<input class="btn_comment_recomm" type="button" value=' + String(comments_list[comment_list_idx].recommend) + ' name="' + comments_list[comment_list_idx].idx + '"></li>');
    }
}

// comment_list 코멘트 높은 순으로 정렬
function sortCommentList() {
    comments_list.sort(function (a, b) {
        if (a.recommend > b.recommend) return -1;
        if (a.recommend == b.recommend) return 0;
        if (a.recommend < b.recommend) return 1;
    });
}

// 사용자 입력 글자수 제한 체크 함수
function checkByteOfUserComment(elem) {
    const max_text_length = 30;
    var text_value = elem.value;
    const text_length = elem.value.length;
    console.log(text_length);
    if (text_length > 10) {
        elem.value = text_value.substr(0, max_text_length);
    }
}


$(document).ready(function () {
    const max_comment_list_item = 3; // 한 화면에 출력되는 코멘트 개수
    var comment_list_top_idx = 0; // 화면에 출력되어 있는 코멘트 중 가장 높은 인덱스
    var comment_list_bottom_idx = 0; // 화면에 출력되어 있는 코멘트 중 가장 낮은 인덱스

    // 페이지가 로드되었을때 1번 실행 - comment 리스트 출력
    sortCommentList();
    for (var i = 0; i < comments_list.length; i++) {
        addElementInCommentArea(i, 1);

        if ($("#cbox_destination").children("li").length > max_comment_list_item - 1) {
            comment_list_top_idx += max_comment_list_item - 1;
            break;
        }
    }

    // 이벤트 핸들러 - 사용자 문장 입력에 대한 확인 버튼
    $("#u_cbox_confirm").on("click", function () {
        var elem = document.getElementById("u_cbox_write");

        comments_list.push({
            idx: "admin7",
            comment: elem.value,
            recommend: 0,
        });

        $("#u_cbox_destination").prepend("<textarea rows='5'>" + elem.value + "</textarea>" + '<input class="btn_comment_recomm" type="button" value="0" name="btn_user_comment_recomm">');
    });

    // 이벤트 핸들러 - 다음 comment 리스트 출력
    $("#cbox_tool_next").on("click", function () {
        if (comment_list_top_idx == comments_list.length - 1) {
            console.log("마지막 페이지!");
            return;
        }

        comment_list_bottom_idx = comment_list_top_idx + 1;
        $("#cbox_destination").empty();

        for (var i = comment_list_bottom_idx; i < comments_list.length; i++) {
            addElementInCommentArea(i, 1);
            comment_list_top_idx++;
            if ($("#cbox_destination").children("li").length > max_comment_list_item - 1) {
                break;
            }
        }
    });

    // 이벤트 핸들러 - 이전 comment 리스트 출력
    $("#cbox_tool_previous").on("click", function () {
        if (comment_list_bottom_idx == 0) {
            console.log("첫번째 페이지");
            return;
        }

        comment_list_top_idx = comment_list_bottom_idx - 1;
        $("#cbox_destination").empty();
        for (var i = comment_list_top_idx; i >= 0; i--) {
            addElementInCommentArea(i, 0);
            comment_list_bottom_idx--;
            if ($("#cbox_destination").children("li").length > max_comment_list_item - 1) {
                break;
            }
        }
    });

    // 이벤트 핸들러 - 추천 버튼 입력시 추천수 변화
    $("#cbox_destination").on("click", "input", function () {
        var target_comment_list_idx = this.name;
        for (var i = 0; i < comments_list.length; i++) {
            if (target_comment_list_idx == comments_list[i].idx) {
                comments_list[i].recommend++;
                this.value = String(comments_list[i].recommend);
                break;
            }
        }
    });

    // 이벤트 핸들러 - comment_input의 글자수가 변경되었을 때
    $("#u_cbox_write").on("keyup", function () {
        checkByteOfUserComment(this);

        var text_length = this.value.length;
        $("#u_cbox_length").text(String(text_length) + "자");
    });
});