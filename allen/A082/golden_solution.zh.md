$R_{AB} = \dfrac{1}{2\beta(V_C - V_T)}$，与 $v_{AB}$ 无关；单管给出 $R = \dfrac{v_{DS}}{i_D} = \dfrac{1}{\beta(V_C - V_T - v_{DS}/2)}$（增量电阻为 $1/[\beta(V_C - V_T - v_{DS})]$），与 $v_{DS}$ 有关。[图 1] 的并联对线性度更好。

- 取 $v_{AB} > 0$（A 为两个器件的漏极，B 为源极）。
- M1：$V_{GS1} = (v_A + V_C) - v_B = V_C + v_{AB}$，因此 $i_1 = \beta[(V_C - V_T + v_{AB})v_{AB} - v_{AB}^2/2] = \beta[(V_C - V_T)v_{AB} + v_{AB}^2/2]$。
- M2：$V_{GS2} = V_C$，因此 $i_2 = \beta[(V_C - V_T)v_{AB} - v_{AB}^2/2]$。
- $i_{AB} = i_1 + i_2 = 2\beta(V_C - V_T)v_{AB}$：平方项相互抵消，$R_{AB} = 1/[2\beta(V_C - V_T)]$。由对称性，$v_{AB} < 0$ 时结果相同。只要两管都保持在线性区，即 $|v_{AB}| < V_C - V_T$，该结果就成立。
- 单个器件：$i_D = \beta[(V_C - V_T)v_{DS} - v_{DS}^2/2]$，因此电阻随 $v_{DS}$ 变化（二阶项 $-\beta v_{DS}^2/2$，相对变化约为 $v_{DS}/[2(V_C - V_T)]$）。只有在 $v_{DS} \to 0$ 时才退化为 $r_{ds} = 1/[\beta(V_C - V_T)]$。在 [图 2] 中栅极还接在固定的 $V_{BIAS}$ 上，因此 $V_{GS}$ 本身也随源极电压变化，带来进一步的非线性。
- 在平方律模型的精度范围内，该并联对是线性的；体效应和迁移率退化（mobility degradation）会留下残余非线性。它的电阻也只有同尺寸单个器件的一半。
