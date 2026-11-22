# 详细步骤 - G331

关闭 $V_i$，把受控源 $a_v(s)v_x$ 换成独立源 $a_v(s)v_t$，计算经电阻分压返回的 $v_x$，则 $\mathscr{R}=-v_x/v_t$。$C_{\text{in}}=0$ 时分压比为常数 1/2，因此 $\mathscr{R}$ 等于 $a_v/2$，其单位增益穿越频率约为 $|a_v|$ 穿越频率的一半。

### 第 1 步 — 回归比

$V_i=0$ 时输入电阻接地。源 $a_v(s)v_t$ 驱动 100 kΩ 反馈电阻；$C_{\text{in}}=0$ 时反相节点位于两个相等电阻的中点：
$$
v_{\text{node}}=a_v(s)v_t\,\frac{100\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}}=\frac{a_v(s)v_t}{2} .
$$
$v_x$ 的 + 端接地，故 $v_x=-v_{\text{node}}$，于是
$$
\mathscr{R}(s)=-\frac{v_x}{v_t}=\frac{a_v(s)}{2}=\frac{500}{(1+s/100)(1+s/10^6)} .
$$

### 第 2 步 — $|\mathscr{R}|=1$ 的频率

在两个极点之间，即 $100\ \mathrm{rad/s}\ll\omega\ll10^6\ \mathrm{rad/s}$ 时，第一个极点因子约为 $j\omega/100$，第二个约为 1，因此
$$
|\mathscr{R}(j\omega)|\approx\frac{500\times100\ \mathrm{rad/s}}{\omega}=1
\quad\Rightarrow\quad \omega\approx5\times10^4\ \mathrm{rad/s}.
$$
第二个极点只使其略微降低：精确求解 $|\mathscr{R}(j\omega)|=1$ 得 $\omega=4.99\times10^4$ rad/s，即 7.95 kHz。

### 第 3 步 — 与 $|a_v|=1$ 比较

按同样的近似，$|a_v(j\omega)|\approx1000\times100\ \mathrm{rad/s}/\omega=1$ 在 $\omega\approx10^5$ rad/s 处成立。计入 $10^6$ rad/s 极点的精确值为 $9.95\times10^4$ rad/s，即 15.8 kHz。因此回归比的单位增益穿越频率是运放单位增益频率的一半：二者之比就是电阻分压器的反馈系数 $1/2$。
