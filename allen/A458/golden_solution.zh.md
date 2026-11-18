$v_{OUT} = \dfrac{C}{C_F}\left(b_0 + \dfrac{b_1}{2} + \dfrac{b_2}{4} + \dfrac{b_3}{8}\right)V_{REF}$，对于图示的电池极性输出为正；当 $C_F = 2C$ 时，$v_{OUT} = \left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \dfrac{b_2}{8} + \dfrac{b_3}{16}\right)V_{REF}$。

φ2 期间梯形网络的节点电压依次为 $-V_{REF}$、$-V_{REF}/2$、$-V_{REF}/4$、$-V_{REF}/8$（每个节点向右看到 2C，因此每个串联的 2C 都使电压减半）；值为 1 的每一位，其并联电容向求和节点转移电荷 $-C\,V_{node}$，反相电荷放大器（charge amplifier）将其转换为 $v_{OUT} = -(C/C_F)\sum b_iV_{node,i}$。
