$\dfrac{v_{out}}{v_{in}} = -\dfrac{g_{m1}}{g_{ds1} + g_{ds3}} = -\sqrt{\dfrac{2K'_N(W/L)_1}{I_{BIAS}(\lambda_1 + \lambda_3)^2}}$，$R_{out} = \dfrac{2}{g_{ds1} + g_{ds3}} = \dfrac{2}{I_{BIAS}(\lambda_1 + \lambda_3)}$。

- 对差模输入，公共源极节点为交流地。$v_3 = -g_{m1}(v_{in}/2)(r_{ds1}\,\|\,r_{ds3})$，$v_4 = +g_{m2}(v_{in}/2)(r_{ds2}\,\|\,r_{ds4})$，因此 $v_3 - v_4 = -g_{m1}v_{in}/(g_{ds1} + g_{ds3})$。
- 在两个输出端之间，两个半边电路的电阻串联：$R_{out} = 2/(g_{ds1} + g_{ds3})$。
- 由 $g_{m1} = \sqrt{2K'_N(W/L)_1I_{BIAS}}$ 和 $g_{ds} = \lambda I_{BIAS}$ 得到上述表达式；增益按 $1/\sqrt{I_{BIAS}}$ 下降。其差模增益与电流镜负载级相同，但为后者单端值的两倍。
