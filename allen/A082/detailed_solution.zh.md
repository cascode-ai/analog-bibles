# 详细步骤 - A082

用 $v_{AB}$ 写出每个晶体管的线性区电流（注意哪一端是源极），把两个电流相加，再将所得的 $i$–$v$ 关系与栅源电压固定为 $V_C$ 的单个晶体管相比较。

### 第 1 步 — M1 和 M2 的电流

取 $v_{AB}=v_A-v_B>0$，则两个晶体管都以 A 为漏极、B 为源极，$v_{DS}=v_{AB}$。两者都处于线性区，这要求各自满足 $v_{AB}<V_{GS}-V_T$。

- M1：栅极电压为 $v_A+V_C$，因此 $V_{GS1}=v_A+V_C-v_B=V_C+v_{AB}$，

$$
i_1=\beta\Big[(V_C-V_T+v_{AB})v_{AB}-\frac{v_{AB}^2}{2}\Big]=\beta\Big[(V_C-V_T)v_{AB}+\frac{v_{AB}^2}{2}\Big].
$$

- M2：栅极电压为 $v_B+V_C$，因此 $V_{GS2}=V_C$，

$$
i_2=\beta\Big[(V_C-V_T)v_{AB}-\frac{v_{AB}^2}{2}\Big].
$$

### 第 2 步 — 并联对的电阻

两个晶体管并联，因此

$$
i_{AB}=i_1+i_2=2\beta(V_C-V_T)\,v_{AB},
\qquad
R_{AB}=\frac{v_{AB}}{i_{AB}}=\frac{1}{2\beta(V_C-V_T)}=\frac{L}{2K'W(V_C-V_T)} .
$$

$v_{AB}^2$ 项相互抵消：M1 的栅驱动随 $v_{AB}$ 增大，恰好补偿 M2 平方律的弯曲。$v_{AB}<0$ 时 A 与 B、M1 与 M2 的角色互换，由对称性得到相同结果。只要两个器件都保持在线性区，即 $|v_{AB}|<V_C-V_T$，该式就成立。

### 第 3 步 — 单管浮空电阻

对 $\beta$ 相同、$V_{GS}=V_C$ 的单个晶体管：

$$
i_D=\beta\Big[(V_C-V_T)v_{DS}-\frac{v_{DS}^2}{2}\Big],
\qquad
R=\frac{v_{DS}}{i_D}=\frac{1}{\beta\big(V_C-V_T-v_{DS}/2\big)},
\qquad
r_{ds}=\Big(\frac{\partial i_D}{\partial v_{DS}}\Big)^{-1}=\frac{1}{\beta\big(V_C-V_T-v_{DS}\big)} .
$$

二者都依赖于 $v_{DS}$，只有当 $v_{DS}\to0$ 时才化为 $r_{ds}=L/[K'W(V_C-V_T)]$。大信号电阻的相对变化为 $v_{DS}/[2(V_C-V_T)]$，例如 $v_{DS}=0.1(V_C-V_T)$ 时为 5%。在 [图 2] 中栅极接固定的 $V_{BIAS}$，实际上 $V_{GS}$ 还会随源极电压变化，带来更多非线性。

### 第 4 步 — 哪种更线性

[图 1] 的并联对线性度更好：在平方律模型的精度内，其电阻 $1/[2\beta(V_C-V_T)]$ 与 $v_{AB}$ 无关，而单管电阻含有 $-\beta v_{DS}^2/2$ 项，随 $v_{DS}$ 变化。并联对的电阻也只有同尺寸单管的一半。该模型以外的效应（体效应、迁移率退化）会留下少量残余非线性。
