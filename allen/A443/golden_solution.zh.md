$v_{OUT} = \dfrac{2C}{2C + C_L}\left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \cdots + \dfrac{b_{N-1}}{2^N}\right)V_{REF} = \dfrac{1}{1 + C_L/2C}\sum_{i=0}^{N-1} b_i 2^{-(i+1)}V_{REF}$。

对上极板节点应用电荷守恒（φ1 之后电荷为零）：$C_{eq}(V_{REF} - v_{OUT}) = (2C - C_{eq} + C_L)v_{OUT}$，其中 $C_{eq} = \sum b_i C/2^i$，因此 $v_{OUT} = C_{eq}V_{REF}/(2C + C_L)$。
