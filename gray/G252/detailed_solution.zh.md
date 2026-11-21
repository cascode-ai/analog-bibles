# 详细步骤 - G252

以运放的受控源 $a_v(v_+-v_-)$ 为参考元件。由于 $v_+=0$，它等于 $-a_vv_-$。求出该受控源的回归比 $\mathcal R$、渐近增益 $A_\infty$（受控源取无穷大）和直接馈通 $d$（受控源置零），再把它们组合起来；阻抗则由布莱克曼公式求得。

### 第 1 步 — 回归比

令 $i_i=0$（理想电流源置零时为开路），在受控源处断开环路，用测试电压 $v_t$ 代替 $a_v(\cdot)$ 驱动输出支路。$v_t$ 经 $R_o$ 驱动 $R_L$ 与对地支路 $R_F+R_i$ 的并联：

$$
R_L\parallel(R_F+R_i)=15\ \mathrm{k\Omega}\parallel600\ \mathrm{k\Omega}=14.63\ \mathrm{k\Omega},\qquad
v_o=v_t\,\frac{14.63\ \mathrm{k\Omega}}{14.63\ \mathrm{k\Omega}+0.2\ \mathrm{k\Omega}}=0.9865\,v_t .
$$

$R_F$ 与 $R_i$ 把 $v_o$ 分压到反相输入端，$v_-=v_o\,R_i/(R_i+R_F)=0.8333\,v_o$。返回的受控源值为 $-a_vv_-$，故

$$
\mathcal R=-\frac{-a_vv_-}{v_t}=a_v(0.9865)(0.8333)=61{,}657 .
$$

### 第 2 步 — 渐近增益与直接馈通

当 $a_v\to\infty$ 时，要使输出有限必须 $v_-\to0$：反相输入端为虚地，$R_i$ 中没有电流，$i_i$ 全部经 $R_F$ 流向输出端。因此

$$
A_\infty=\frac{v_o}{i_i}\bigg|_{a_v\to\infty}=-R_F=-100\ \mathrm{k\Omega}.
$$

$a_v=0$ 时输出端是无源的：$i_i$ 看到 $R_i$ 与 $R_F+R_o\parallel R_L$ 的并联（$R_o\parallel R_L=197.4\ \Omega$），$R_F$ 与 $R_o\parallel R_L$ 构成分压器：

$$
v_-=i_i\,[R_i\parallel(R_F+R_o\parallel R_L)]=(83.47\ \mathrm{k\Omega})\,i_i,\qquad
d=\frac{v_o}{i_i}=83.47\ \mathrm{k\Omega}\cdot\frac{197.4\ \Omega}{100.2\ \mathrm{k\Omega}}=+164\ \Omega .
$$

### 第 3 步 — 闭环跨阻

$$
\frac{v_o}{i_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}
=(-100\ \mathrm{k\Omega})\frac{61{,}657}{61{,}658}+\frac{164\ \Omega}{61{,}658}=-99{,}998\ \Omega\approx-100\ \mathrm{k\Omega}.
$$

馈通项只有 2.7 mΩ，可以忽略。环路传输为 $\mathcal R=6.17\times10^{4}$。

### 第 4 步 — 输入电阻（布莱克曼公式）

$a_v=0$ 时，$R_{in}(a_v{=}0)=R_i\parallel(R_F+R_o\parallel R_L)=83.47\ \mathrm{k\Omega}$。输入端口短路迫使 $v_-=0$，故 $\mathcal R(\text{short})=0$；输入端口开路（移去驱动电流源）时，回归比就是第 1 步求得的 61,657：

$$
R_{in}=R_{in}(a_v{=}0)\,\frac{1+0}{1+61{,}657}=\frac{83.47\ \mathrm{k\Omega}}{61{,}658}=1.354\ \Omega .
$$

### 第 5 步 — 输出电阻（布莱克曼公式）

$a_v=0$ 时，输出端看到 $R_o$、$R_L$ 与 $R_F+R_i$ 三者并联：

$$
R_{out}(a_v{=}0)=R_o\parallel R_L\parallel(R_F+R_i)=197.3\ \Omega .
$$

输出端口短路使 $v_o=0$，从而 $v_-=0$，故 $\mathcal R(\text{short})=0$；输出端口开路（$R_L$ 作为电路的一部分保留）时 $\mathcal R(\text{open})=61{,}657$。因此

$$
R_{out}=\frac{197.3\ \Omega}{61{,}658}=3.20\ \mathrm{m\Omega}.
$$

四个结果都与对电路直接进行节点分析的结果一致。
