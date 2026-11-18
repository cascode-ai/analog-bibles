考虑 [图 1] 所示电路（$V_{DD}$ = 5 V，R = 50 kΩ，三个晶体管的 W/L 均为 1 µm/1 µm；圆圈中的数字为节点编号）。

(a) 写出描述该电路的 SPICE 网表（netlist）。
(b) 将 M2 改为 2 µm/1 µm，且 M3 与 M2 按 1:2 比例匹配，重做 (a)。

采用 level-1 模型参数：n 沟道 VTO = 0.7 V，KP = 110 µA/V²，GAMMA = 0.4 V$^{1/2}$，LAMBDA = 0.04 V⁻¹，PHI = 0.7 V；p 沟道 VTO = −0.7 V，KP = 50 µA/V²，GAMMA = 0.57 V$^{1/2}$，LAMBDA = 0.05 V⁻¹，PHI = 0.8 V。题中未给定输入电压 $v_{IN}$：请为它加一个直流源（例如 1 V），并要求计算直流工作点（dc operating point）。
