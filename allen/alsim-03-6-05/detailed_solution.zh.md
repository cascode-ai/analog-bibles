# 详细步骤 - alsim-03-6-05

保留 [图 1] 的测试电路（VGS 接在节点 1 与地之间，VDS 接在节点 2 与地之间，源极和衬底接节点 0），换成 p 沟道器件。此时所有电压都为负，两个扫描都向下进行：以 $v_{DS}$ 为内层变量、$v_{GS}$ 为外层变量的嵌套直流分析一次即可得到整族曲线。再用 level-1 方程求出拐点和电流加以核对。

### 第 1 步 — 输入文件

```spice
PMOS output characteristics
M1 2 1 0 0 MOSP W=5U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MOSP PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VDS 0 -5 -0.2 VGS -1 -5 -1
.PRINT DC V(2) I(VDS)
.END
```

由于每个扫描都从 0 走向 −5 V，步长取负值。衬底与源极相连，$v_{BS}=0$，GAMMA 和 PHI 不影响结果。常规电流从源极（节点 0）经漏极流出，流入 VDS 的 + 端。因此 $I(\mathrm{VDS})=|i_D|>0$，而以流入漏极为正方向定义的漏极电流为负，$i_D=-I(\mathrm{VDS})$。

### 第 2 步 — p 沟道器件的 level-1 方程

记 $\beta=K'_P(W/L)=(50\ \mu\mathrm{A/V^2})(5)=250\ \mu\mathrm{A/V^2}$，$V_{ov}=|v_{GS}|-|V_{TP}|=|v_{GS}|-0.7$ V：

$$
|i_D|=
\begin{cases}
\beta\left(V_{ov}|v_{DS}|-\tfrac12|v_{DS}|^2\right)(1+\lambda|v_{DS}|), & |v_{DS}|<V_{ov}\\[4pt]
\tfrac12\beta V_{ov}^2(1+\lambda|v_{DS}|)=(125\ \mu\mathrm{A/V^2})V_{ov}^2(1+0.05|v_{DS}|), & |v_{DS}|\ge V_{ov}.
\end{cases}
$$

拐点位于 $|v_{DS}|=V_{ov}=0.3$、1.3、2.3、3.3 和 4.3 V。

### 第 3 步 — 预期电流

$v_{GS}=-3$ V、$v_{DS}=-5$ V 时（饱和，$V_{ov}=2.3$ V）：

$$
|i_D|=(125\ \mu\mathrm{A/V^2})(2.3\ \mathrm V)^2(1+0.05\cdot5)=(661\ \mu\mathrm A)(1.25)=827\ \mu\mathrm A .
$$

$v_{GS}=-5$ V、$v_{DS}=-2$ V 时器件处于非饱和区（$2<4.3$）：

$$
|i_D|=(250\ \mu\mathrm{A/V^2})\left[(4.3)(2)-\tfrac12(2)^2\right](1+0.05\cdot2)=(250\ \mu\mathrm A)(6.6)(1.1)=1.815\ \mathrm{mA}.
$$

| $v_{GS}$ | 拐点 $\lvert v_{DS}\rvert$ | $v_{DS}=-2$ V 时的 $\lvert i_D\rvert$ | $v_{DS}=-5$ V 时的 $\lvert i_D\rvert$ |
|---|---|---|---|
| −1 V | 0.3 V | 12.4 µA | 14.1 µA |
| −2 V | 1.3 V | 232 µA | 264 µA |
| −3 V | 2.3 V | 715 µA | 827 µA |
| −4 V | 3.3 V | 1.27 mA | 1.70 mA |
| −5 V | 4.3 V | 1.82 mA | 2.89 mA |

### 第 4 步 — 仿真曲线族

![vGS = −1 至 −5 V 时的 PMOS 输出特性仿真曲线，以 −iD 随 −vDS 变化表示，并标出拐点](/q/alsim-03-6-05/solution-curves.zh.svg)

ngspice 数值与上表在作图精度内一致。曲线形状与 n 沟道特性相同，只是镜像到第三象限：$v_{GS}$、$v_{DS}$ 和 $i_D$ 都为负。相同尺寸、采用 n 沟道参数的器件在 $|v_{GS}|=|v_{DS}|=5$ V 时电流为 $\tfrac12(110)(5)(4.3)^2(1+0.04\cdot5)\ \mu\mathrm A=6.10$ mA。p 沟道器件为 2.89 mA，约为其 0.47 倍，主要由于 $K'_P/K'_N=50/110$；较大的 λ 使该比值略有提高。
