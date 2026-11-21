# 详细步骤 - G148

写出开环增益 $a$ 有限时的闭环增益，求出相对理想电阻比的偏差，并要求在增益容差最不利的一端，即开环增益最低时，偏差不超过 0.1%。

### 第 1 步 — 有限 $a$ 时的闭环增益

令 $R_1=1\ \mathrm{k\Omega}$、$R_2=1\ \mathrm{M\Omega}$，$V_{top}$ 和 $V_{bot}$ 分别为上、下输入端的电压，故 $v_{in}=V_{top}-V_{bot}$。运放不取输入电流，各输入端电压由分压决定（反相端用叠加原理）：

$$
V_+=V_{bot}\frac{R_2}{R_1+R_2},\qquad V_-=V_{top}\frac{R_2}{R_1+R_2}+V_o\frac{R_1}{R_1+R_2}.
$$

由 $V_o=a(V_+-V_-)$，并记反馈系数 $f=R_1/(R_1+R_2)$，

$$
V_o\left(1+af\right)=-a\frac{R_2}{R_1+R_2}v_{in}\ \Rightarrow\
V_o=-\frac{R_2}{R_1}v_{in}\cdot\frac{1}{1+\dfrac{1}{af}} .
$$

### 第 2 步 — 增益误差

理想增益大小为 $R_2/R_1=1000$。相对误差为

$$
\epsilon=1-\frac{1}{1+1/(af)}=\frac{1}{1+af},\qquad \frac1f=\frac{R_1+R_2}{R_1}=1001,
$$

故 $\epsilon\approx1001/a$。注意噪声增益为 $1/f=1001$，而不是信号增益 1000。

### 第 3 步 — 所需开环增益

$$
\epsilon\le10^{-3}\ \Rightarrow\ af\ge999\ \Rightarrow\ a\ge999\times1001=1.0\times10^{6}.
$$

$a$ 越小误差越大，因此该下限必须在容差的下端 $a_{\min}=0.5\,a_{nom}$ 处成立（+100% 一端只会减小误差）：

$$
a_{nom}\ge\frac{1.0\times10^6}{0.5}=2.0\times10^{6}.
$$

运放的标称开环增益至少约为 $2\times10^6$（126 dB），这样其最低值约 $10^6$ 时，增益仍保持在 1000 的 0.1% 以内。
