稳定之后，$M_5$ 的栅极电压基本回到原值。注入的电荷改变的是 $C_1$ 和 $C_2$ 上存储的电压，因此输出共模电平移动 $\Delta V_{out,CM} = -\Delta q/(C_1 + C_2)$（当 $C_1 = C_2 = C$ 时 $= -\Delta q/(2C)$）。对于 NMOS 开关，Δq 为负（电子），因此输出共模电平升高 $|\Delta q|/(C_1 + C_2)$。

- 共模环路必须保持 $I_{D5} = I_{D3} + I_{D4}$，而后者由 $V_b$ 固定，因此稳态时 $V_{GS5}$（= $V_X$）不能改变。
- 浮空节点 X 上的电荷守恒：$(C_1 + C_2)(\Delta V_X - \Delta V_{CM}) + C_{GS5}\Delta V_X = \Delta q$。考虑环路作用，$\Delta V_{CM} = -A_{CM}\Delta V_X$，其中 $A_{CM} \approx g_{m5}(r_{O3} \parallel r_{O4})$ 是从 X 到输出的共模增益。因此 $\Delta V_X = \Delta q/[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}] \approx 0$，$\Delta V_{CM} \approx -\Delta q/(C_1 + C_2)$。
- 从暂态过程看：X 先跳变 ≈ $\Delta q/(C_1 + C_2 + C_{GS5})$（此时输出尚未移动）。随后环路使两个输出都移动 $-\Delta q/(C_1 + C_2)$，直到 X 恢复。
