
var PageName = 'Accredited Deals';
var PageId = 'pde04cf1776254875aa1d8ed03c59f29a'
document.title = 'Accredited Deals';

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

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u15 = document.getElementById('u15');

var u2 = document.getElementById('u2');

var u19 = document.getElementById('u19');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="Investment Portfolio.html" + GetQuerystring();

}

}
gv_vAlignTable['u8'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="Forums_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{

if (true) {

	self.location.href="Main Page.html" + GetQuerystring();

}

}
gv_vAlignTable['u0'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u25 = document.getElementById('u25');

var u21 = document.getElementById('u21');

var u17 = document.getElementById('u17');

var u3 = document.getElementById('u3');

var u29 = document.getElementById('u29');

var u23 = document.getElementById('u23');

var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Accredited Deals.html" + GetQuerystring();

	window.location.reload();

}

}
gv_vAlignTable['u9'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

	self.location.href="RSS.html" + GetQuerystring();

}

}
gv_vAlignTable['u1'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="Investor Profile.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u27 = document.getElementById('u27');

if (window.OnLoad) OnLoad();
