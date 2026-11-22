# 详细步骤 - A396

在反相迟滞电路中，$v_{IN}$ 与同相输入端电压比较，后者是输出与 $V_{REF}$ 的电阻加权组合。两个翻转点之差决定分压比，二者的中点决定 $V_{REF}$。

### 第 1 步 — 翻转点方程

比较器没有输入电流，由叠加原理得

$$
v_+=\frac{R_1}{R_1+R_2}v_{OUT}+\frac{R_2}{R_1+R_2}V_{REF}.
$$

$v_{IN}<v_+$ 时输出为高。上升的输入在输出为高时翻转，下降的输入在输出为低时翻转：

$$
V_{TRP}^+=\frac{R_1}{R_1+R_2}V_{OH}+\frac{R_2}{R_1+R_2}V_{REF},\qquad
V_{TRP}^-=\frac{R_1}{R_1+R_2}V_{OL}+\frac{R_2}{R_1+R_2}V_{REF}.
$$

### 第 2 步 — 由迟滞宽度求分压比

$$
V_{TRP}^+-V_{TRP}^-=\frac{R_1}{R_1+R_2}(V_{OH}-V_{OL})
\quad\Rightarrow\quad
1\ \mathrm V=\frac{R_1}{R_1+R_2}(4\ \mathrm V)
\quad\Rightarrow\quad
R_1+R_2=4R_1,\qquad R_2=3R_1 .
$$

例如 $R_1=100$ kΩ、$R_2=300$ kΩ。

### 第 3 步 — 由回线中心求 $V_{REF}$

把两个翻转点方程相加：

$$
\frac{V_{TRP}^++V_{TRP}^-}2=\frac{R_1}{R_1+R_2}\cdot\frac{V_{OH}+V_{OL}}2+\frac{R_2}{R_1+R_2}V_{REF}.
$$

要求的中心为 $(0.5-0.5)/2=0$ V，且输出电平对称，$V_{OH}+V_{OL}=0$，故 $\tfrac34V_{REF}=0$，

$$
V_{REF}=0\ \mathrm V .
$$

### 第 4 步 — 验证

$$
V_{TRP}^+=\tfrac14(2\ \mathrm V)=0.5\ \mathrm V,\qquad V_{TRP}^-=\tfrac14(-2\ \mathrm V)=-0.5\ \mathrm V .
$$

![以 0 V 为中心、翻转点为正负 0.5 V 的反相迟滞回线](/q/A396/solution-curves.zh.svg)

输入低于 $-0.5$ V 时输出为高，高于 $+0.5$ V 时输出为低，二者之间取决于先前状态；$R_1$ 可以直接接地。
