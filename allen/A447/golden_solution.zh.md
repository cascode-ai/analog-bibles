一个电容分压器（capacitive divider）：$V_{REF}$ — $C_{eq}$ — 输出节点 — $(2C - C_{eq})$ — 地，其中

- $C_{eq} = \sum_{i=0}^{N-1} b_i \dfrac{C}{2^i}$：值为 1 的位所对应的全部阵列电容（下极板接 $V_{REF}$，上极板接输出节点，因此在 $V_{REF}$ 与输出之间并联）；
- $2C - C_{eq}$：其余所有电容，即值为 0 的位所对应的电容加上端接电容 $C/2^{N-1}$，在输出节点与地之间并联。无论什么码，阵列总电容始终为 $C + C/2 + \cdots + C/2^{N-1} + C/2^{N-1} = 2C$。

由于所有电容初始都已放电，分压器给出 $v_{OUT} = V_{REF}\dfrac{C_{eq}}{C_{eq} + (2C - C_{eq})} = \dfrac{C_{eq}}{2C}V_{REF} = \left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \cdots + \dfrac{b_{N-1}}{2^N}\right)V_{REF}$。（戴维南形式：一个 $(C_{eq}/2C)V_{REF}$ 的电压源串联 2C。）
