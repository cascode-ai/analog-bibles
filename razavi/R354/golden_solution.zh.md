$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right) = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right)$$

- 在两个漏极节点列基尔霍夫电流定律（KCL）方程并相减，得 $(g_{m5} - g_{m3})(V_A - V_B) = (I_{nA} - I_{nB}) - (I_{n1} - I_{n2}) - g_{m1}V_{in}$，其中 $I_{nA} = I_{n5} + I_{n3}$、$I_{nB} = I_{n6} + I_{n4}$ 分别为两个节点上的负载噪声电流。对差分量而言，尾节点的影响被抵消。
- 差模增益（differential gain）为 $g_{m1}/(g_{m5} - g_{m3}) = 2g_{m1}/g_{m5}$；折算到输入端时负载电导被约去，因此每个负载噪声电流都除以 $g_{m1}$。
- 四个负载器件（$2 \times 4kT\gamma(g_{m3} + g_{m5})$）和两个输入器件（$2 \times 4kT\gamma g_{m1}$）共同给出上述结果。交叉耦合对提高了增益，但也增加了噪声。
