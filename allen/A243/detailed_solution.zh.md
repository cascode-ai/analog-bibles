# 详细步骤 - A243

写出在反相输入路径中含受控源时理想运放的输出，再分别对纯共模、纯差模和一般输入，与定义 $V_{out}=A_v(V_1-V_2)\pm A_c(V_1+V_2)/2$ 比较。

### 第 1 步 — 含受控源时的输出

忽略其他非理想因素，理想运放的 + 输入端为 $v_1$。受控源 $v_1/\mathrm{CMRR}$ 的 + 端接 $v_2$，− 端朝向运放，所以 − 输入端为 $v_2-v_1/\mathrm{CMRR}$。因此

$$
v_{out}=A_v\Big[v_1-\Big(v_2-\frac{v_1}{\mathrm{CMRR}}\Big)\Big]
=A_v(v_1-v_2)+\frac{A_v}{\mathrm{CMRR}}\,v_1
=A_v(v_1-v_2)+A_cv_1,
$$

其中用到 $\mathrm{CMRR}=A_v/A_c$。

### 第 2 步 — 纯共模输入

$v_1=v_2=v_{cm}$ 时差模项为零：

$$
v_{out}=\frac{A_v}{\mathrm{CMRR}}v_{cm}=A_cv_{cm},
$$

由于 $(v_1+v_2)/2=v_{cm}$，这正是定义所要求的共模输出。定义中的 ± 对应 CMRR 的符号，即受控源的极性。

### 第 3 步 — 差模输入与一般输入

$v_1=-v_2=v_{id}/2$ 时：

$$
v_{out}=A_vv_{id}+A_c\frac{v_{id}}{2}=A_vv_{id}\Big(1+\frac{1}{2\,\mathrm{CMRR}}\Big)\approx A_vv_{id},
$$

因为 $\mathrm{CMRR}\gg1$。对一般输入 $v_1=v_{cm}+v_{id}/2$、$v_2=v_{cm}-v_{id}/2$：

$$
v_{out}=A_vv_{id}+A_cv_{cm}+A_c\frac{v_{id}}{2}\approx A_vv_{id}+A_cv_{cm}.
$$

与定义唯一的差别是 $A_cv_{id}/2$ 一项，它只占差模输出的 $1/(2\,\mathrm{CMRR})$，可以忽略。

### 第 4 步 — 结论

单个受控源 $v_1/\mathrm{CMRR}$ 精确地再现了共模输出 $A_cv_{cm}$，而几乎不改变差模增益，因此是运放共模特性的合适模型。若用 $(v_1+v_2)/2$ 而不是 $v_1$ 来控制该源，模型就是精确的；用 $v_1$ 控制也足够准确，因为 CMRR 很大。
