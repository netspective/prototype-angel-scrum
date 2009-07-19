
var PageName = 'RSS Feed';
var PageId = 'pd518d1ed1d1a49e58724a63330d982de'
document.title = 'RSS Feed';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="Upload Docs.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u0 = document.getElementById('u0');

x = 0;
y = 0;
u0ann.insertAdjacentHTML("afterBegin", "<div id='u0Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u0', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u0').replace(/\[\[label\]\]/g, '?'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u0based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u0base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u0based = document.getElementById('u0based');
            
u0based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> An example of an RSS feed link<BR><BR></div>");
gv_vAlignTable['u0'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="MyIT Profile.html" + GetQuerystring();

}

}
gv_vAlignTable['u13'] = 'top';
var u3 = document.getElementById('u3');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Blog.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

	self.location.href="Main Page.html" + GetQuerystring();

}

}
gv_vAlignTable['u1'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="Financial.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="Forums.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u7 = document.getElementById('u7');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="RSS Feed.html" + GetQuerystring();

	window.location.reload();

}

}
gv_vAlignTable['u2'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
if (window.OnLoad) OnLoad();
