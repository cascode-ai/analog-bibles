# 详细步骤 - G332

在计入 $C_{\text{in}}$ 的情况下求回归比。输入电容加载反馈分压器，在反馈通路中于 $2/(RC_{\text{in}})$ 处引入一个极点。找出 $|\mathscr{R}|$ 的穿越频率（它几乎不变），再把三个极点在该处的相位滞后相加。

### 第 1 步 — 计入 $C_{\text{in}}$ 的回归比

令 $V_i=0$，把受控源换成 $a_v(s)v_t$，反相节点经反馈电阻 $R=100$ kΩ 接到该源，并经输入电阻 $R$ 与 $C_{\text{in}}$ 的并联接地。分压比为
$$
\frac{R\,\|\,(1/sC_{\text{in}})}{R+R\,\|\,(1/sC_{\text{in}})}
=\frac{R/(1+sRC_{\text{in}})}{R+R/(1+sRC_{\text{in}})}
=\frac{1/2}{1+sRC_{\text{in}}/2} .
$$
$v_x$ 等于节点电压的负值，因此
$$
\mathscr{R}(s)=\frac{a_v(s)}{2}\cdot\frac{1}{1+s/\omega_3}=\frac{500}{(1+s/100)(1+s/10^6)(1+s/\omega_3)},\qquad \omega_3=\frac{2}{RC_{\text{in}}} .
$$

| $C_{\text{in}}$ | $\omega_3$（rad/s） |
|---|---|
| 0 | $\infty$ |
| 4 pF | $2/(100\ \mathrm{k\Omega}\times4\ \mathrm{pF})=5\times10^6$ |
| 20 pF | $10^6$ |

### 第 2 步 — 穿越频率

在 $\omega_3$ 和 $10^6$ rad/s 以下，$|\mathscr{R}|\approx500\times100/\omega$，在 $\omega_c\approx5\times10^4$ rad/s 处等于 1。附加极点在此几乎不改变幅值。精确求解 $|\mathscr{R}(j\omega_c)|=1$，0 和 4 pF 时得 $4.99\times10^4$ rad/s，20 pF 时也是 $4.99\times10^4$ rad/s（相差 0.2% 以内）。

### 第 3 步 — 相位裕度

在 $\omega_c$ 处，$\mathscr{R}$ 的相位为
$$
\angle\mathscr{R}(j\omega_c)=-\tan^{-1}\frac{\omega_c}{100}-\tan^{-1}\frac{\omega_c}{10^6}-\tan^{-1}\frac{\omega_c}{\omega_3},
$$
且 $\mathrm{PM}=180^\circ+\angle\mathscr{R}(j\omega_c)$。$C_{\text{in}}=0$ 时：
$$
\mathrm{PM}=180^\circ-89.9^\circ-2.9^\circ=87.3^\circ .
$$

| $C_{\text{in}}$ | $\omega_3$ 引起的滞后 | 相位裕度 |
|---|---|---|
| 0 | 0 | 87.3° |
| 4 pF | $\tan^{-1}(0.01)=0.6^\circ$ | 86.7° |
| 20 pF | $\tan^{-1}(0.05)=2.9^\circ$ | 84.4° |

输入电容在反馈通路中引入极点，总是使裕度减小。此处减小很少，因为即使 20 pF 时，$10^6$ rad/s 处的附加极点也比穿越频率高 20 倍。
