$W_{eq} = \sum_{i=1}^{n} W_i$，$L_{eq} = L$。

- 所有晶体管的 $v_{GS}$、$v_{DS}$ 和 $v_{BS}$ 都相同，因此 $V_T$ 和工作区也相同，并且（L 相同）λ 也相同。
- 在每个工作区中，每个电流都与各自的 $W_i/L$ 成正比：饱和区中 $i_{Di} = \frac{K'W_i}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS})$，非饱和区中 $i_{Di} = \frac{K'W_i}{L}[(v_{GS}-V_T)v_{DS} - v_{DS}^2/2]$。
- 求和得 $i_D = \sum i_{Di} = \frac{K'(\sum W_i)}{L}f(v_{GS}, v_{DS})$：恰好等于一个宽度为 $\sum W_i$、长度为 L 的晶体管的电流。（栅面积以及由此决定的栅电容也相加：$L\sum W_i$。）
