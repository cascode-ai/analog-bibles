# 详细步骤 - G016

均匀掺杂基区中的厄利效应（Early effect）来自基区宽度调制（base-width modulation）：$|V_{CE}|$ 增大使集电结耗尽区展宽、中性基区变窄，少数载流子浓度梯度增大。用 $dW_B/dV_{CE}$ 表示 $\partial I_C/\partial V_{CE}$，得到厄利电压，再除以电流。$pnp$ 管的各量取幅值计算。

### 第 1 步 — 电流与基区宽度的关系

对均匀基区，集电极电流是线性分布下的扩散电流：

$$
|I_C|=\frac{qAD_pn_i^2}{N_DW_B}\,e^{|V_{BE}|/V_T}\ \propto\ \frac1{W_B}.
$$

$V_{BE}$ 固定时，只有 $W_B$ 随 $V_{CE}$ 变化，故

$$
\frac{\partial|I_C|}{\partial|V_{CE}|}=-\frac{|I_C|}{W_B}\frac{dW_B}{d|V_{CE}|}=\frac{|I_C|}{V_A},\qquad
V_A=\frac{W_B}{\left|dW_B/dV_{CE}\right|}.
$$

耗尽层边缘每伏向基区推进 0.11 µm，这正是中性基区宽度的缩小速率。

### 第 2 步 — 厄利电压与输出电阻

$$
V_A=\frac{10\ \mu\mathrm m}{0.11\ \mu\mathrm m/\mathrm V}=90.9\ \mathrm V,\qquad
r_o=\frac{V_A}{|I_C|}=\frac{90.9\ \mathrm V}{0.5\ \mathrm{mA}}=182\ \mathrm{k\Omega}.
$$

计算中把题给的变化率视为偏置点附近的常数，它确定了该点的小信号 $r_o$。

结果：$r_o\approx182$ kΩ，$V_A\approx91$ V。
