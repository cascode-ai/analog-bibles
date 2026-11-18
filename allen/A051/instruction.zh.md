一个简单的 MOS 模型用下式描述非饱和区：
$$i_D = K'\frac{W}{L}\left[(v_{GS}-V_T) - \frac{v_{DS}}{2}\right]v_{DS},\qquad 0 < v_{DS} \le v_{GS}-V_T$$
并用下式描述计入沟道长度调制（channel-length modulation）的饱和区：
$$i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS}),\qquad 0 < v_{GS}-V_T \le v_{DS}.$$
这两个方程在饱和区与非饱和区的转折点处并不一致。对手工计算而言这不成问题，但对计算机分析则是个问题。应如何修改饱和区方程，使它在 $v_{DS} = v_{DS}(\text{sat}) = v_{GS} - V_T$ 处与非饱和区方程一致？
