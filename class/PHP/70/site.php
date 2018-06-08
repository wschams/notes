<?php 

class Site {
    private $siteName;
    private $top = "top.php";
    private $bottom = "bottom.php";

    public function __construct($siteName) {
        $this->siteName = $siteName;
    }

    public function render(Page $page) {
        $pageTitle = $page->getTitle();
        include $this->top;
        echo $page->getContents();
        include $this->bottom;
    }
}
/*$siteName = "The PCS Site";
include "top.php" 
?>

<h2>Page #1</h2>
<p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nemo, praesentium unde vero ducimus fugiat commodi suscipit non nobis eius neque, voluptatibus natus labore aliquam harum nihil consectetur. Voluptatum nobis doloremque rerum laudantium reiciendis dolores ducimus, quasi beatae ea assumenda maxime officiis aperiam obcaecati minima fugiat perspiciatis accusantium, architecto pariatur sed cumque repellat, vero expedita vel neque. In eligendi maxime maiores! Similique accusamus enim repellendus molestiae exercitationem earum, quae consequuntur. Fugiat id natus, sed distinctio labore pariatur quibusdam quos repellat porro non aperiam inventore adipisci vero asperiores! Animi cupiditate doloremque velit vitae iure aut accusamus voluptas ducimus voluptatum iste labore obcaecati laudantium, quos atque! Architecto aut, laborum voluptates earum delectus quam error. Nihil sapiente culpa amet architecto impedit quidem aspernatur id totam aut dignissimos cum, quas ea deleniti numquam reiciendis eligendi officiis repellendus similique ullam ipsum voluptatibus aliquam. Veniam expedita impedit eius, ipsam modi aliquam a blanditiis, quasi cum ipsa aspernatur quaerat pariatur, distinctio ratione atque dignissimos? Reprehenderit, delectus accusantium, sed fugiat assumenda repellat nihil rerum, incidunt ullam unde dolorum impedit? Minima, soluta. Perferendis aperiam debitis tempora facilis eaque ducimus fuga assumenda, amet voluptatem cum architecto culpa iusto blanditiis quo voluptate dicta qui quaerat dolore. Molestias cupiditate dolorem obcaecati autem.
</p>

<?php include "bottom.php" ?>
*/

/*$site = new Site("The PCS Site");
//$page = new PageOne();
//$page = new PageTwo();
$page = new Page("Page #3", "Page three contents");
$site->render($page);*/

/*$site = new Site("The BMG Site");
$page = new Page("BMGS Page", "BMG is the worlds largest yeshiva...");
$site->render($page);*/
?>